import { useEffect, useState } from "react";
import "./App.css";
import Appbar from "./components/AppBar";
import {
  Insertion,
  Quick,
  Selection,
  Merge,
  Heap,
} from "./components/Helper/constants";
import { generateArray } from "./components/Helper/helper";
import { InsertionSort } from "./components/SortingAlgorithms/InsertionSort";
import { QuickSort } from "./components/SortingAlgorithms/QuickSort";
import { SelectionSort } from "./components/SortingAlgorithms/SelectionSort";
import { MergeSort } from "./components/SortingAlgorithms/MergeSort";
import { HeapSort } from "./components/SortingAlgorithms/HeapSort";
import SortingBars from "./components/SortingBars";

function App() {
  const [algorithm, setAlgorithm] = useState(() => {
    const saved = localStorage.getItem("selectedAlgorithm");
    return saved || Insertion;
  });
  const [array, setArray] = useState([]);

  const newArray = (len = 50) => {
    generateArray(len, setArray);
  };

  useEffect(() => {
    newArray(50);
  }, []);

  const sortArray = async (array) => {
    switch (algorithm) {
      case Insertion:
        await InsertionSort(array, setArray);
        break;
      case Selection:
        await SelectionSort(array, setArray);
        break;
      case Quick:
        await QuickSort(array, 0, array.length - 1, setArray);
        break;
      case Merge:
        await MergeSort(array, setArray);
        break;
      case Heap:
        await HeapSort(array, setArray);
        break;
      default:
        console.log("Not algo");
    }
  };

  const updateAlgorithm = (algo) => {
    setAlgorithm(algo);
    localStorage.setItem("selectedAlgorithm", algo);
  };

  return (
    <div className="app">
      <Appbar
        sortArray={sortArray}
        array={array}
        algorithm={algorithm}
        setAlgorithm={updateAlgorithm}
      />
      <SortingBars array={array} />
    </div>
  );
}

export default App;
