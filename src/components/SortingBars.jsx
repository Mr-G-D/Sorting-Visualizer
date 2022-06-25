import React, { useState } from "react";
import { Button, makeStyles } from "@material-ui/core";

const SortingBars = () => {
  let random = [200, 300, 430, 100, 322, 493, 268, 500];

  const [array, setArray] = useState(random);

  const sortArray = (array) => {
    for (let index = 0; index < array.length; index++) {
      array[index] += 100;
      setTimeout(() => {
        setArray([...array]);
      }, 300);
    }
  };

  const styles = useStyles();
  return (
    <div className={styles.main}>
      <div className={styles.body}>
        {array.map((bar) => (
          <div
            className={bar}
            key={bar}
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
