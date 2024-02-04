import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {

  const [ filteredCategories, setFilteredCategories ] = useState('All')
  const [ tasks, setTasks ] = useState(TASKS)
  console.log(tasks)

  const filteredTasks = TASKS.filter((task) => {
    if(filteredCategories === 'All') {
      return task
    } else {
      return task.category === filteredCategories
    }
  })
function handleNewTask(newTask){
  // Update the tasks state with the new task
  setTasks((tasks) => [...tasks, newTask])
}
console.log(tasks)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      setFilteredCategories={setFilteredCategories} filteredCategories={filteredCategories} 
      CATEGORIES={CATEGORIES} 
      TASKS={TASKS}/>
      <NewTaskForm CATEGORIES={CATEGORIES}  onTaskFormSubmit={handleNewTask}/>
      <TaskList CATEGORIES={CATEGORIES} TASKS={filteredTasks} setTasks={setTasks} tasks={tasks} />
    </div>
  );
}

export default App;
