import React, { useEffect, useState } from "react";
import "./App.css";

function CheckUseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //  alert("Use Effect.");
    console.log("Use Effect !!!!");
    console.log("Updating !!");
  });
  return (
    <>
      <div className="App">
        <h1>Use Effect </h1>
        <h3>Count : {count}</h3>
        <button onClick={() => setCount(count + 1)}>Update Count</button>
      </div>
    </>
  );
}

export default CheckUseEffect;
