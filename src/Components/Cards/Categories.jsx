import React from "react";
import {categories} from "../../backend/db/categories";
import "../../styles/Homepage.css";

const Categories = () => {
  return (


<section className="card-categories m-1t ">
   {categories.map((category)=>{
       return(
        <div className="cards">
        <img src={category.image} alt={category.categoryName} className="card-image"/>
        <h3 className="card-heading">{category.categoryName.toUpperCase()}</h3>
    </div>
    
       )
   })}
</section>
  );
};

export {Categories};