import { useEffect, useState } from "react";
import "./App.css";
import Appbar from "./components/AppBar";
import { generateArray } from "./components/Helper/helper";
import { InsertionSort } from "./components/SortingAlgorithms/InsertionSort";
import SortingBars from "./components/SortingBars";

function App() {
  const [array, setArray] = useState(generateArray(50));

  useEffect(() => {
    setArray(generateArray(50));
  }, []);

  const sortArray = async (array) => {
    InsertionSort(array, setArray);
  };
  return (
    <div className="app">
      <Appbar function={sortArray} array={array} />
      <SortingBars array={array} />
    </div>
  );
}

export default App;
