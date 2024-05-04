import React, { useEffect, useState } from "react";
import "./App.css";
import UserCheck from "./UserCheck";
function CheckUseEffectwithCondition() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(100);
  useEffect(() => {
    console.log("After Rendering Count!!!");
  }, []);
  useEffect(() => {
    console.log("After Rendering Total !!!");
  }, []);
  return (
    <>
      <div className="App">
        <h1>Use Effect with Condition !!!! </h1>
        <UserCheck count={count} total={total} />
        {/* <h2>Count : {count}</h2> */}
        <button onClick={() => setCount(count + 1)}>Update Count</button>

        {/* <h2>Total : {total}</h2> */}
        <button onClick={() => setTotal(total + 1)}> Update Total</button>
      </div>
    </>
  );
}

export default CheckUseEffectwithCondition;
