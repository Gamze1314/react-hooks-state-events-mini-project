import React from "react";


function CategoryFilter({ CATEGORIES , TASKS , setFilteredCategories , filteredCategories }) {


function handleClick(cat) {
  setFilteredCategories(cat);
  }


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {CATEGORIES.map((cat) => (
     <button onClick={() => handleClick(cat)} className={filteredCategories === cat ? "selected" : ""} key={cat} category={cat}>
     {cat}
     </button>
      ))}
    </div>
  );

 }
export default CategoryFilter;


