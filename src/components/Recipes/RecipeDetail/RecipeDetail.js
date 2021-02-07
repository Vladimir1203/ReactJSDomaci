import React from 'react';
import './RecipeDetail.css';

const RecipeDetail = (props) => {
  let displayForm=true;
  debugger
  let displayRecipeDet=props.displayRecipeDetail;
  let selectedIt=props.selectedItem;
  if(props.recipes.length===0){
    displayRecipeDet=false;
    selectedIt=-1;
  }
  return(
  <div className="container">
    {displayRecipeDet?
    <div id="divDetail">
      <img className="imgDetail" src={props.recipes[props.selectedItem].imagePath}></img>
      <div className="recipeDetailDiv">
        <h3>{props.recipes[props.selectedItem].name}</h3>
        <p>{props.recipes[props.selectedItem].description}</p>
        <button 
             onClick={props.removeRecipe}
             className="redButton">Delete Recipe</button>
        <button 
        onClick={showEditForm}
        className="editButton">Edit Recipe</button>
        <button 
        onClick={props.displayIngredientFormHandler}
        className="addIngredients">Add ingredients</button>
      </div>
    </div>
    :console.log()}

    {displayForm?
    <div className="form-popup" id="myForm">
    <form id="form-container">
      <h1>Edit Recipe</h1>

      <label htmlFor="recipeName"><b>Recipe Name</b></label>
      <input onChange={props.nameChanged} value={selectedIt>=0?props.recipes[props.selectedItem].name:""} className="newName" type="text" placeholder="Enter recipe name" name="recipeName"/>

      <label htmlFor="desc"><b>Recipe Description</b></label>
      <input onChange={props.descChanged} value={selectedIt>=0?props.recipes[props.selectedItem].description:""} className="newDescription" type="text" placeholder="Enter recipe description" name="desc" required/>

      <label htmlFor="imagePath"><b>Image Path</b></label>
      <input onChange={props.imgChanged} value={selectedIt>=0?props.recipes[props.selectedItem].imagePath:""} className="newImagePath"type="text" placeholder="Enter image path" name="imagePath" required/>

      <button 
      type="button"
      className="btn cancel"
      onClick={closeForm}>Close</button>
    </form>
    </div>
    :console.log("Nema forme")
    }
    
  </div>
  );
  function closeForm(){
    let removeForm=document.getElementsByClassName('form-popup')[0];
    removeForm.style.display='none';
    displayForm=false;
  }

  function showEditForm(){
    let displayForm=document.getElementsByClassName('form-popup')[0];
    displayForm.style.display='block';
  }

};

RecipeDetail.propTypes = {};

RecipeDetail.defaultProps = {};

export default RecipeDetail;
