import React, { useState } from "react";

function App() {
  const [inputText, setInput] = useState("");
  const [items, setItems] = useState([]);

  function handleInput(event) {
    const newValue = event.target.value;
    setInput(newValue);
  }

  function addItem() {
    setItems((prevValue) => {
      return [...prevValue, inputText];
    });
    setInput("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleInput} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItems) => (
            <li>{todoItems}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
