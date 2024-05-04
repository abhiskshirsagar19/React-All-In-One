import React, { Component } from "react";
import "./App.css"
class App1 extends Component {
    constructor(){
        super();
        console.log("Constructor method called....")
    }
  render() {

    console.log("Render method called....")
    return (
      <>
        <div className="App">
          <h1>Life Cycle Method in React.</h1>
        </div>
      </>
    );
  }
}

export default App1;
