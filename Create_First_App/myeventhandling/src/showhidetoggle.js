import "./App.css";
import React, { useState } from "react";
function Show() {
  const [status, setStatus] = useState(true);
  return (
    <div className="show">
      <h1>Show, hide and toggle</h1>
      {status ? <div className="status"> Content</div> : null}

      <button onClick={() => setStatus(false)}>Hide</button>
      <button onClick={() => setStatus(true)}>Show</button>
      <button onClick={() => setStatus(!status)}>Toggle</button>
    </div>
  );
}

export default Show;
