import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log({ CATEGORIES, TASKS });


function App() {

  const [ filteredCategories, setFilteredCategories ] = useState('All')
  const [ tasks, setTasks ] = useState(TASKS)
 
function filterTaskByCat(cat) {
  setFilteredCategories(cat);
  const filteredTasks = TASKS.filter((task) => {
    if (cat === "All") {
      return task;
    } else {
      return task.category === cat;
    }
  });
  setTasks(filteredTasks);
}

function handleNewTask(newTask){
  // Update the tasks state with the new task
  setTasks((tasks) => [...tasks, newTask])
}


function handleDeleteTask(deletedTask){
 const updatedTasks = tasks.filter(task => deletedTask.text !== task.text)
 setTasks(updatedTasks)
}

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      filteredCategories={filteredCategories} 
      CATEGORIES={CATEGORIES} 
      filterTaskByCat={filterTaskByCat}/>
      <NewTaskForm CATEGORIES={CATEGORIES}  onTaskFormSubmit={handleNewTask}/>
      <TaskList tasks={tasks} handleDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
