import React from 'react';
import './AddRecipe.css';
import RecipeComponent from '../RecipeComponent/RecipeComponent';

const AddRecipe = (props) => {

  return(
  <div className="container">
  <button 
  onClick={props.addRecipe}>Generate Recipe</button>
    {props.shouldIDisplay?props.recipes.map((recipe,index)=>
    <RecipeComponent
    shouldIDisplayIngredients={props.shouldIDisplayIngredients}
    recipeIngredients={props.recipeIngredients}
    selectedItem={props.selectedItem}
    displayDetail={props.displayDetail}
    recipeName={recipe.name}
    recipeId={index}
    recipeImagePath={recipe.imagePath}
    recipeDescription={recipe.description}
    selectedItem={props.selectedItem}
    />
    ):<h3>No Recipe Added Yet</h3>
    }

  </div>
);
  
    };

AddRecipe.propTypes = {};

AddRecipe.defaultProps = {};

export default AddRecipe;
