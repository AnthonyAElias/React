import "./styles.css";

//export default function App() {
//return (
//<div className="App">
//<h1>Hello CodeSandbox</h1>
//<h2>Start editing to see some magic happen!</h2>
//</div>
//);
//}
import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
