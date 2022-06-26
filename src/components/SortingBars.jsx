import React, { useState } from "react";
import { Button, makeStyles } from "@material-ui/core";
import { InsertionSort } from "./SortingAlgorithms/InsertionSort";

const SortingBars = () => {
  let random = [
    600, 500, 400, 100, 200, 300, 600, 500, 400, 100, 200, 300, 600, 500, 400,
  ];

  const [array, setArray] = useState(random);
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const sortArray = async (array) => {
    let temp, j;
    for (let index = 0; index < array.length; index++) {
      for (let i = 1; i < array.length; i++) {
        temp = array[i];
        j = i - 1;
        while (j >= 0 && array[j] > temp) {
          array[j + 1] = array[j];
          await swap(array[j + 1], array[j]);
          setArray([...array]);
          j--;
          await sleep(1000);
        }
        array[j + 1] = temp;
      }
    }
  };

  const swap = async (a, b) => {
    let temp = a;
    a = b;
    b = temp;
  };

  const styles = useStyles();
  return (
    <div className={styles.main}>
      <div className={styles.body}>
        {array.map((bar) => (
          <div
            className={bar}
            style={{
              height: bar,
              backgroundColor: "dodgerblue",
              width: 5,
              marginRight: 1,
              borderRadius: "50px",
            }}
          ></div>
        ))}
      </div>

      <hr className={styles.hr} />
      <Button
        onClick={() => sortArray(array)}
        variant="contained"
        color="primary"
        className={styles.button}
      >
        Animate
      </Button>
    </div>
  );
};

export default SortingBars;

const useStyles = makeStyles({
  main: {
    marginLeft: "20px",
    marginRight: "20px",
  },
  body: {
    margin: "70px",
    marginTop: "50px",
    marginBottom: "0px",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  hr: {
    margin: "0px",
    position: "relative",
  },
  button: {
    marginLeft: "47%",
    marginRight: "47%",
  },
});
