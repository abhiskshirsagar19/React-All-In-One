import React from "react";
import "./App.css";
import "./style.css";
import Style from "./style.module.css"
function StyleComponent() {
  const cssstyle = {
    color: "Red",
    backgroundColor: "black",
  };
  return (
    <>
      <div className="App">
        <h1>Styled Component </h1>
        {/*Inline CSS*/}
        <h2 style={{ color: "#fff", backgroundColor: "grey" }}> Inline CSS </h2>

        {/*Normal CSS*/}
        <h2 className="primary"> Normal CSS </h2>

        {/*CSS in JS*/}
        <h2 style={cssstyle}>CSS In JS</h2>

        <h2 className={Style.title}> CSS Module</h2>
      </div>
    </>
  );
}
export default StyleComponent;
