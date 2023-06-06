import React from "react";
import classes from "./demoList.module.css";
import "./button.css";

export const DemoList = (props) => {
  const arr = [1, 3, 5, 9, 10];

  const listShowHandler = () => {
    props.listDisplay();
  };

  return (
      <div className={classes.card}>
          <h1>My Demo List</h1>
      <ul style={{ listStyleType: "none" }} className={classes["flex-container"]}>
        {arr.map((ele) => (
          <li key={ele} className={classes["flex-item"]}>
            {ele}
          </li>
        ))}
          </ul>
          <div className="card">
          <button className="button-card button-center" onClick={listShowHandler}>Change List Title</button>
          </div>
          </div>
  );
};

export default DemoList;
