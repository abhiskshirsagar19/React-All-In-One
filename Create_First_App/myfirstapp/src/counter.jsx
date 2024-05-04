// import { useState } from "react";
// import React from "react";

// export default function Counter() {
//   let [count, setData] = useState(1);
//   const increment = () => {
//     setData(count + 1);
//   };
//   const decrement = () => {
//     setData(count - 1);
//   };
//   return (
//     <div>
//       <p>Counter : {count}</p>
//       <div>
//         <button onClick={increment}>Increment</button>
//       </div>
//       <div>
//         <button onClick={decrement}>Decrement</button>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";

function Component() {
  let [count, setData] = useState(0);

  const increment = () => {
    setData(count + 1);
  };
  const decrement = () => {
    setData(count - 1);
  };
  return (
    <div>
      <p>Counter : {count}</p>
      <div>
        <button onClick={increment}>Increment</button>
      </div>
      <div>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}

export default Component;
