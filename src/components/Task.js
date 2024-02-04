import React from "react";
// create li and button for each task

function Task({ tasks }) {

 
  const taskItems = tasks.map((taskObj) => (
    <li key={taskObj.text} category={taskObj.category} text={taskObj.text}>
      {taskObj.text} - {taskObj.category}
      <button  className="delete">
        X
      </button>
    </li>
  ));

  return (
    <div className="task">
      <ul className="label"></ul>
      <ul className="text">{taskItems}</ul>
    </div>
  );
}

export default Task;

