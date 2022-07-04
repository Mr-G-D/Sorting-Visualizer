import { useEffect, useState } from "react";
import "./App.css";
import Appbar from "./components/AppBar";
import { Insertion, Selection } from "./components/Helper/constants";
import { generateArray } from "./components/Helper/helper";
import { InsertionSort } from "./components/SortingAlgorithms/InsertionSort";
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
        console.log("working");
        SelectionSort(array, setArray);
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
