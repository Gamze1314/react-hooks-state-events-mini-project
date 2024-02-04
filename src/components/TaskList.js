import React from "react";
import Task from "./Task";

function TaskList({ CATEGORIES, tasks }) {


  return (
    <div className="tasks">
      <Task CATEGORIES={CATEGORIES} tasks={tasks} />
    </div>
  );
}

export default TaskList;