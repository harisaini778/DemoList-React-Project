import React, { useEffect, useState } from "react";
import DemoList from "./components/demoList";
import "./App.css";

function App() {
  const [displayList, setDisplayList] = useState(false);

  useEffect(() => {
    console.log("display list changed");
  }, [displayList]);

  const listDisplayHandler = () => {
    setDisplayList(true);
  };


  return (
    <div className="container">
      <DemoList listDisplay={listDisplayHandler}/>
    </div>
  );
}

export default App;
