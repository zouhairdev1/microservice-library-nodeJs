import React from 'react';

// Shared Tailwind CSS 
const buttonClasses = "px-4 py-2 border border-zinc-300 rounded-full text-yellow-400  hover:bg-zinc-100 hover:text-zinc-500";
const containerClasses = "flex space-x-4 p-4 overflow-x-auto";
const hrClasses = "mt-4 border-zinc-200";

const BookCategoryButton = ({ category }) => {
  return (
    <button className={buttonClasses}>{category}</button>
  );
};

const BookCategoryList = () => {
  const categories = ["fantasy", "booktok recs", "mystery", "spice", "comfort books", "thriller", "romance"];

  return (
     <div className="flex justify-between items-center mb-4">
        <button className={buttonClasses}>Books</button>
    <div className={containerClasses}>
      {categories.map((category, index) => (
        <BookCategoryButton key={index} category={category} />
      ))}
     
          <button className={buttonClasses}>+</button>
        </div>
      </div>
  
  );
};

const MenuCategories = () => {

  return (
    <div>
      <BookCategoryList />
      <hr className={hrClasses} />
      
    </div>
  );
};

export default MenuCategories;
