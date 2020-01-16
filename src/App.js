import React, { useState } from "react";
import "./App.css";

import Task from "./components/Task";

function App() {
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState("");
  const [edition, setEdition] = useState(-1); // si edition === -1 : il n'y a rien a editer, sinon c'est la position de l'élément a éditer
  const [tasks, setTasks] = useState([]);

  const handleTitleChange = e => {
    setTitle(e.target.value);
  };

  const handleSearchChange = e => {
    setSearch(e.target.value);
  };

  const submitTitle = e => {
    e.preventDefault();

    // On check si edition est > -1 pour savoir si on doit recuperer un element pour le modifier
    if (edition > -1) {
      // On check que title ne soit pas vide
      if (title === "") return;
      // On recupere l'élément a modifier
      const task = tasks[edition];
      // On le met à jour
      task.title = title;
      // On update tasks avec le nouveau tableau
      setTasks([...tasks]);
    } else {
      // On check que title ne soit pas vide
      if (title === "") return;
      // On a defini notre tache
      const task = { title: title, state: false };
      // On ajoute notre task a notre liste de tache
      // On update tasks avec le nouveau tableau
      setTasks([...tasks, task]);
    }
    // On clean title
    setTitle("");
    // On clean edition
    setEdition(-1);
  };

  const changeState = index => {
    // On recupere l'élément a la position de l'index
    // Et on change son etat
    const task = tasks[index];
    task.state = !task.state;
    tasks.splice(index, 1);

    if (task.state) {
      // On créé un nouveau tableau pour mettre a jour la vue
      setTasks([...tasks, task]);
    } else {
      setTasks([task, ...tasks]);
    }
  };

  const editTask = index => {
    setEdition(index);
    setTitle(tasks[index].title);
  };

  const deleteTask = index => {
    // On supprime l'élément a la position de l'index
    tasks.splice(index, 1);
    // On créé un nouveau tableau pour mettre a jour la vue
    setTasks([...tasks]);
  };

  return (
    <div className="App">
      <h1>To-Do list</h1>
      <input
        placeholder="Search"
        type="text"
        value={search}
        onChange={handleSearchChange}
      />
      {tasks &&
        tasks.map((task, index) => {
          if (search === "" || task.title.includes(search)) {
            return (
              <Task
                key={`Task:${index}`}
                index={index}
                title={task.title}
                state={task.state}
                deleteTask={deleteTask}
                changeState={changeState}
                editTask={editTask}
              />
            );
          }
          return null;
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
