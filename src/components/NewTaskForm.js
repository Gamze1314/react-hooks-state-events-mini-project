import React, { useState } from "react";

function NewTaskForm({ CATEGORIES , onTaskFormSubmit }) { // CATEGORIES PASSED DOWN AS A PROP
const options = CATEGORIES.filter((cat) => cat !== "All")
 // only category names listed as options

  // STATE to manage form data
  const [formData, setFormData] = useState({
    text: "",
    category: "Code"  // Default to the first category 
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Pass the form data to the parent component
    onTaskFormSubmit(formData);
    // Clear the form fields after submission
    setFormData({ text: "", category: "Code" });
  }

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={handleChange} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={handleChange} name="category">
          {options.map((category) => (
         <option key={category} value={category}>{category}</option>
        ))}
        </select>
      </label>
      <input onChange={handleChange} type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;


