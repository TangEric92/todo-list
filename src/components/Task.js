import React from "react";
import "./Task.css";

function Task(props) {
  const { index, title, state, deleteTask, changeState, editTask } = props;

  return (
    <div className="task-wrapper">
      <span className="task-delete" onClick={() => deleteTask(index)}>
        X
      </span>
      <span
        className="task-title"
        onClick={() => changeState(index)}
        // Grace au props "style", qui prend un objet en parametre, on ajoute du style au dessus du style defini dans le className
        // On fait une ternaire pour definir si le texte doit etre barré ou non
        style={{ textDecoration: state ? "line-through" : "" }}
      >
        {title}
      </span>
      <span className="task-edition" onClick={() => editTask(index)}>
        O
      </span>
    </div>
  );
}

export default Task;
