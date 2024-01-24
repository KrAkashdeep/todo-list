import React, { useState } from "react";
import TodoItem from "./TodoItem";
import InputArea from "./InputArea";

function App() {
  const [item, setItem] = useState([]);

  function addItem(Textme) {
    setItem((previtem) => {
      return [...previtem, Textme];
    });
  }

  function deleteMe(id) {
    setItem((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {item.map((todoItem, index) => {
            return (
              <TodoItem
                key={index}
                id={index}
                text={todoItem}
                onChecked={deleteMe}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
