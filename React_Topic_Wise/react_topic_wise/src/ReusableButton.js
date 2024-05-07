import React from "react";

export default function ReusableButton({text, onClick}) {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  );
}
