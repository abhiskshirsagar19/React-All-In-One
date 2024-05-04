import React, { useEffect } from "react";
import "./App.css";
function UserCheck(props) {
  //   useEffect(() => {
  //     console.log("Children !!!");
  //   });

  useEffect(() => {
    console.log("Called with Props !!!");
  });
  useEffect(() => {
    console.log("Count is  ", props.count);
  }, [props.count]);
  return (
    <>
      <div className="App">
        <h1>Use Effect with Condition !!!! </h1>

        <h2>Count : {props.count}</h2>
        <h2>Total : {props.total}</h2>
      </div>
    </>
  );
}

export default UserCheck;
