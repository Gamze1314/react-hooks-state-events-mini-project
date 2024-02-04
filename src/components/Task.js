import React from "react";
// create li and button for each task

function Task({ task ,handleDeleteTask }) {

  return (
    <div className="task">
      <ul className="label">{task.category}</ul>
      <ul className="text">{task.text}</ul>
      <button onClick={() => handleDeleteTask(task)} className="delete"> X </button>
    </div>
  );
}

export default Task;

