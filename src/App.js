import { useEffect, useState } from "react";
import "./App.css";
import Appbar from "./components/AppBar";
import { Insertion, Quick, Selection } from "./components/Helper/constants";
import { generateArray } from "./components/Helper/helper";
import { InsertionSort } from "./components/SortingAlgorithms/InsertionSort";
import { QuickSort } from "./components/SortingAlgorithms/QuickSort";
import { SelectionSort } from "./components/SortingAlgorithms/SelectionSort";
import SortingBars from "./components/SortingBars";

function App() {
  const [array, setArray] = useState([]);
  const [algorithm, setAlgorithm] = useState(Insertion);

  const newArray = (len = 50) => {
    generateArray(len, setArray);
  };

  useEffect(() => {
    newArray(50);
  }, []);

  const sortArray = async (array) => {
    switch (algorithm) {
      case Insertion:
        InsertionSort(array, setArray);
        break;
      case Selection:
        SelectionSort(array, setArray);
        break;
      case Quick:
        QuickSort(array, 0, array.length - 1, setArray);
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
      <SortingBars array={array} />
    </div>
  );
}

export default App;
