import React, { useState } from "react";
import classes from "./demoList.module.css";
import "./button.css";

export const DemoList = (props) => {
  const arr = [1, 3, 5, 9, 10];

  const[headerTitle,setHeaderTitle] =useState("My Demo List")
  const [sortedList, setSortedList] = useState([]);
  const [sortOrder, setSortOrder] = useState("descending"); // Track sort order

    const listShowHandler = () => {
        if (headerTitle === "My Demo List") {
           setHeaderTitle("New Demo List");
        }
        else {
            setHeaderTitle("My Demo List")
        }
     
    props.listDisplay();
  };

  const descendingOrderHandeler = () => {
    if (sortOrder === "descending") {
      const sorted = [...arr].sort((a, b) => a - b); // Sort in ascending order
      setSortedList(sorted);
        setSortOrder("ascending");
        setHeaderTitle("My Demo List");
      props.listDisplay();
    } else {
      const sorted = [...arr].sort((a, b) => b - a); // Sort in descending order
      setSortedList(sorted);
        setSortOrder("descending");
        setHeaderTitle("New Demo List")
      props.listDisplay();
    }
  };

  const displaySortedList = () => {
    if (sortedList.length > 0) {
      return (
        <ul style={{ listStyleType: "none" }} className={classes["flex-container"]}>
          {sortedList.map((ele) => (
            <li key={ele} className={classes["flex-item"]}>
              {ele}
            </li>
          ))}
        </ul>
      );
    } else {
      return (
        <ul style={{ listStyleType: "none" }} className={classes["flex-container"]}>
          {arr.map((ele) => (
            <li key={ele} className={classes["flex-item"]}>
              {ele}
            </li>
          ))}
        </ul>
      );
    }
  };

  return (
    <div className={classes.card}>
          <h1>{headerTitle}</h1>
      {displaySortedList()}
      <div className="card">
        <button className="button-card button-center" onClick={listShowHandler}>
          Change List Title
        </button>
        <button className="button-card button-center" onClick={descendingOrderHandeler}>
          {sortOrder === "descending" ? "Change To Ascending Order" : "Change To Descending Order"}
        </button>
      </div>
    </div>
  );
};

export default DemoList;
