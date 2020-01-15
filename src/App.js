import React, { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleTitleChange = e => {
    setTitle(e.target.value);
  };

  const submitTitle = e => {
    e.preventDefault();
    // On check que title ne soit pas vide
    if (title === "") return;
    // On a defini notre tache
    const task = { title: title, state: false };
    // On ajoute notre task a notre liste de tache
    tasks.push(task);
    // On update tasks avec le nouveau tableau
    setTasks(tasks);
    // On clean title
    setTitle("");
  };

  return (
    <div className="App">
      <h1>To-Do list</h1>
      {tasks &&
        tasks.map((task, index) => {
          return <p>{task.title}</p>;
        })}
      <form onSubmit={submitTitle}>
        <input
          placeholder="Titre"
          type="text"
          value={title}
          onChange={handleTitleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
