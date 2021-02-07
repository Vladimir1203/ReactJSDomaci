import React, { useState, memo } from "react"
import './RecipeComponent.css';
import RecipeIngredient from "../../Ingredients/RecipeIngredient/RecipeIngredient";
const RecipeComponent = (props) => {
  function toggleActiveStyles(index){
    if(props.recipeId===props.selectedItem){
      return "recipeItem active";
    }else{
      return "recipeItem";
    }
  }
  return(
  <div >
        <a href="#"
           onClick={() => props.displayDetail(props.recipeId)}
        >
        <div 
        key={props.recipeId} 
        className={toggleActiveStyles(props.recipeId)}
        >
        <h1>{props.recipeName}</h1>
        <img src={props.recipeImagePath}></img>
        <p>{props.recipeDescription}</p>
        </div>
        </a>
        
        {props.selectedItem===props.recipeId?
        <RecipeIngredient
        selectedItem={props.selectedItem}
        recipeIngredients={props.recipeIngredients}
        />:console.log()}
  </div>
  );
};

RecipeComponent.propTypes = {};

RecipeComponent.defaultProps = {};

export default RecipeComponent;
