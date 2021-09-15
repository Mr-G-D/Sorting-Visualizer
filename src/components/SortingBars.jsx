import React from "react";
import { makeStyles } from "@material-ui/styles";

let array = [];
for (let i = 0; i < 200; i++) {
  array.push(Math.random() * 500 + 10);
}

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
              backgroundColor: "#ff0000",
              width: 5,
              marginRight: 1,
              borderRadius: "50px",
            }}
          ></div>
        ))}
      </div>

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
    justifyContent: "center",
  },
  hr: {
    margin: "0px",
  },
});
