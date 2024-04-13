import "./App.css";
import React, { useState } from "react";
function App() {
  const [input, setInputValue] = useState("");
  const [inputValueShow, setInputValueHide] = useState(false);
  const handleChnage = (event) => {
    // console.log(event);
    // console.log(event.target);
    // console.log(event.target.value);
    setInputValue(event.target.value);
    setInputValueHide(false);
  };
  return (
    <div className="App">
      <h1>Get input box value.</h1>
      {/* <h2>{input}</h2> */}
      <h2>{inputValueShow ? input : " "}</h2>
      <input type="text" onChange={handleChnage}></input>
      <button onClick={() => setInputValueHide(true)}>Submit</button>
    </div>
  );
}

export default App;
