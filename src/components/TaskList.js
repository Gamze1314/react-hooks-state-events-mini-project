import React from "react";
import Task from "./Task";

function TaskList({ tasks , handleDeleteTask }) {

  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task handleDeleteTask={handleDeleteTask} key={task.text} task={task}/>
      ))}
    </div>
  );
}

export default TaskList;