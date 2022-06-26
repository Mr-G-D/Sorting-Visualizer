import React from "react";
import { makeStyles } from "@material-ui/core";

const SortingBars = (props) => {
  const styles = useStyles();
  return (
    <div className={styles.main}>
      <div className={styles.body}>
        {props.array.map((bar) => (
          <div
            className={bar}
            id={bar}
            style={{
              height: bar,
              backgroundColor: "dodgerblue",
              width: 50,
              marginRight: 1,
              borderRadius: "50px",
            }}
          ></div>
        ))}
      </div>

      <hr className={styles.hr} />
      {/* <Button
        onClick={() => sortArray(array)}
        variant="contained"
        color="primary"
        className={styles.button}
      >
        Animate
      </Button> */}
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
