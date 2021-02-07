import React from 'react';
import './AddIngredient.css';

const AddIngredient = (props) => {
  return(
  <div className="ingredientPopUp">
    <form id="form-container">
    <input onChange={props.addIngredientName} type="text" placeholder="Ingredient"></input>
    <input onChange={props.addIngredientAmount} type="text" placeholder="Amount" className="amount"></input>
    <button 
    type="button"
    className="btn"
    onClick={props.addIngredient}>Add Ingredient</button>
    <button 
      type="button"
      className="btn cancel"
      onClick={props.closeForm}>Close</button>
    </form>
  </div>
  )
};

AddIngredient.propTypes = {};

AddIngredient.defaultProps = {};

export default AddIngredient;
