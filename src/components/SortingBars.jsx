import React from "react";
import { makeStyles } from "@material-ui/core";
import { HEAP_LEGEND } from "./Helper/helper";

const SortingBars = (props) => {
  const styles = useStyles();

  return (
    <div className={styles.main}>
      {props.showHeapLegend && (
        <div className={styles.legend}>
          {HEAP_LEGEND.map(({ color, label }) => (
            <span key={label} className={styles.legendItem}>
              <span
                className={styles.legendSwatch}
                style={{ backgroundColor: color }}
              />
              {label}
            </span>
          ))}
        </div>
      )}
      <div className={styles.body}>
        {props.array.map((bar, index) => (
          <div
            key={index}
            style={{
              height: bar,
              backgroundColor: props.barColors?.[index] ?? "dodgerblue",
              width: 50,
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
  legend: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "10px 18px",
    marginTop: "16px",
    marginBottom: "12px",
    fontSize: "0.85rem",
    color: "#546e7a",
  },
  legendItem: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
  },
  legendSwatch: {
    width: 14,
    height: 14,
    borderRadius: 3,
    display: "inline-block",
    flexShrink: 0,
  },
  body: {
    margin: "70px",
    marginTop: "20px",
    marginBottom: "0px",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    height: "600px",
    overflow: "hidden",
  },
  hr: {
    margin: "0px",
    position: "relative",
  },
});
