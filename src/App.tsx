import React from "react";
import "./App.css";
import Todolist from "./components/Todolist/Todolist";

function App() {
  const tasks1 = [
    { id: 1, title: "watch Bad Film", isDone: false },
    { id: 2, title: "meet Gena", isDone: false },
    { id: 3, title: "do push-ups", isDone: true },
  ];

  const tasks2 = [
    { id: 1, title: "Bad Film", isDone: false },
    { id: 2, title: "Titane", isDone: true },
    { id: 3, title: "La vie nouvelle", isDone: true },
  ];

  return (
    <div className="App">
      <Todolist title="What to do" tasks={tasks1} />
      <Todolist title="Movies" tasks={tasks2} />
    </div>
  );
}

export default App;
