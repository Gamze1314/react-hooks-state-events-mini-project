import React from "react";


function CategoryFilter({ CATEGORIES , filteredCategories ,filterTaskByCat }) {


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {CATEGORIES.map((cat) => (
     <button onClick={() => filterTaskByCat(cat)} className={filteredCategories === cat ? "selected" : ""} key={cat} category={cat}>
     {cat}
     </button>
      ))}
    </div>
  );

 }
export default CategoryFilter;


