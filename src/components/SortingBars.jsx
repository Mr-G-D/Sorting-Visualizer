import React from "react";
import { makeStyles } from "@material-ui/styles";

let Array = [200, 300, 400, 500];
let bars = Array.map((bar) => (
  <div
    style={{
      height: bar,
      backgroundColor: "#ff0000",
      width: 5,
      marginRight: 1,
    }}
  ></div>
));

const SortingBars = () => {
  const styles = useStyles();
  return (
    <div className={styles.main}>
      <div className={styles.body}>{bars}</div>

      <hr className={styles.hr} />
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
  },
  hr: {
    margin: "0px",
  },
});
