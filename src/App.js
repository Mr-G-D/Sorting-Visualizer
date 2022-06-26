import { useEffect, useState } from "react";
import "./App.css";
import Appbar from "./components/AppBar";
import { generateArray } from "./components/Helper/helper";
import { InsertionSort } from "./components/SortingAlgorithms/InsertionSort";
import SortingBars from "./components/SortingBars";

function App() {
  const [array, setArray] = useState([]);

  const newArray = (len = 50) => {
    generateArray(len, setArray);
  };

  useEffect(() => {
    newArray(50);
  }, []);

  const sortArray = async (array) => {
    InsertionSort(array, setArray);
  };
  return (
    <div className="app">
      <Appbar sortArray={sortArray} array={array} />
      <SortingBars array={array} />
    </div>
  );
}

export default App;
