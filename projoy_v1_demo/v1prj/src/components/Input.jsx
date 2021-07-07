import React from "react";

function Input({input}) {
  return (
    <div>
      {input.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
}

export default Input;
