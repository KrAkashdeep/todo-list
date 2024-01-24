import React, { useState } from "react";

function InputArea(props) {
  const [Textme, setText] = useState("");
  function Addme(event) {
    const newvalue = event.target.value;
    setText(newvalue);
  }
  return (
    <div className="form">
      <input onChange={Addme} type="text" value={Textme} />
      <button
        onClick={() => {
          props.onAdd(Textme);
          setText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
