import React, {useState} from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import TodoList from "./components/TodoList.jsx";
import Input from "./components/Input.jsx";
import "./App.css";

function App() {
  const [value, setValue] = useState([]);
  const [input, setInput] = useState([]);

  function handleEvent(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    setInput([...input, value]);
  }
  return (
    <div class="main">
      <TodoList
        handleSubmit={handleSubmit}
        handleEvent={handleEvent}
        value={value}
      />
      <Input input={input} />
    </div>
  );
}

export default App;

// *StrbvkS346
