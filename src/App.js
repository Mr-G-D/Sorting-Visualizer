import { useEffect, useState } from "react";
import "./App.css";
import Appbar from "./components/AppBar";
import {
  Insertion,
  Shell,
  Quick,
  Selection,
  Merge,
  Bubble,
  Cocktail,
  Heap,
} from "./components/Helper/constants";
import { generateArray } from "./components/Helper/helper";
import { InsertionSort } from "./components/SortingAlgorithms/InsertionSort";
import { ShellSort } from "./components/SortingAlgorithms/ShellSort";
import { QuickSort } from "./components/SortingAlgorithms/QuickSort";
import { SelectionSort } from "./components/SortingAlgorithms/SelectionSort";
import { MergeSort } from "./components/SortingAlgorithms/MergeSort";
import { BubbleSort } from "./components/SortingAlgorithms/BubbleSort";
import { CocktailShakerSort } from "./components/SortingAlgorithms/CocktailShakerSort";
import { HeapSort } from "./components/SortingAlgorithms/HeapSort";
import SortingBars from "./components/SortingBars";

function App() {
  const [array, setArray] = useState([]);
  const [algorithm, setAlgorithm] = useState(Insertion);
  const [barColors, setBarColors] = useState([]);

  const newArray = (len = 50) => {
    generateArray(len, setArray);
    setBarColors([]);
  };

  useEffect(() => {
    newArray(50);
  }, []);

  const sortArray = async (array) => {
    if (algorithm !== Heap) {
      setBarColors([]);
    }

    switch (algorithm) {
      case Insertion:
        InsertionSort(array, setArray);
        break;
      case Shell:
        ShellSort(array, setArray);
        break;
      case Selection:
        SelectionSort(array, setArray);
        break;
      case Quick:
        QuickSort(array, 0, array.length - 1, setArray);
        break;
      case Merge:
        MergeSort(array, setArray);
        break;
      case Bubble:
        BubbleSort(array, setArray);
        break;
      case Cocktail:
        CocktailShakerSort(array, setArray);
        break;
      case Heap:
        HeapSort(array, setArray, { setBarColors });
        break;
      default:
        console.log("Not algo");
    }
  };
  return (
    <div className="app">
      <Appbar
        sortArray={sortArray}
        array={array}
        algorithm={algorithm}
        setAlgorithm={setAlgorithm}
      />
      <SortingBars
        array={array}
        barColors={barColors}
        showHeapLegend={algorithm === Heap}
      />
    </div>
  );
}

export default App;
