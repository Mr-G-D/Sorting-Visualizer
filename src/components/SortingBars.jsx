import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";

let array = [200, 300];
const animate = (a, b) => {};

const SortingBars = () => {
  const styles = useStyles();
  return (
    <div className={styles.main}>
      <div className={styles.body}>
        {array.map((bar) => (
          <div
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
        onClick={() => animate(array[0], array[1])}
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
