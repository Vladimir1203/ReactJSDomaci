import React from 'react';

const RecipeIngredient = (props) => {
  debugger
  let filteredIngredientArray;
  let tempIngredientsArray=props.recipeIngredients;
  tempIngredientsArray.filter(recipeIngredient => tempIngredientsArray.indexOf(recipeIngredient)===props.selectedItem);
  filteredIngredientArray=tempIngredientsArray[props.selectedItem];
  return(
  <div>
     {filteredIngredientArray.map(recipeIngredient=>
      <div className="ingredientItem">
        <p>{recipeIngredient.name} ({recipeIngredient.amount})</p>
      </div>
    )}
  </div>
  )};

RecipeIngredient.propTypes = {};

RecipeIngredient.defaultProps = {};

export default RecipeIngredient;
