import React from 'react';
import PropTypes from 'prop-types'

const IngredientList = (props) => {
  return (
     <div>
        {<p>{props.ingredients.map((ingredient, i) => <li key={i}>{ingredient.name}</li>)}</p>}
     </div>
  )
};

IngredientList.propTypes = {
  ingredients: PropTypes.array.isRequired,
};

export default IngredientList;
