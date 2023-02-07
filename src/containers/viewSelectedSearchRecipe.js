import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import _ from 'lodash';

const ViewSelectedSearchRecipe = () => {
  const recipeData = useSelector(state => state.recipeData);
  // console.log(recipeData);
  const { id } = useParams();
  const isRecipe = r => r.id === Number(id);
  const recipe = recipeData.results.find(isRecipe);
  console.log(recipe);

  const renderIngredients = () => {
    if (!_.isEmpty(recipe)) {
      return recipe.extendedIngredients.map(item =>
      <p key={recipe.id}>{`${item.measures.us.amount} ${item.measures.us.unitShort} ${item.originalName}`}</p>
      )
    }  
  }
  
  const renderSteps = () => {
    if (!_.isEmpty(recipe)) {
      return recipe.analyzedInstructions[0].steps.map((item, i) =>
      <p key={recipe.id}>{`${i + 1}. ${item.step}`}</p>
      )
    }  
  }
 
  return (
    <div className="recipe-info text-center">
      <div className="row">
        <div className="col-8 offset-2">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <img
            className="mb-4"
            src={recipe.image ? recipe.image : <p>no image</p>}
            alt={recipe.title}
          />
          <h1>{recipe.title}</h1>
          <p>Servings: {recipe.servings}</p>
          <p>Cooking Time: {recipe.readyInMinutes} minutes</p>
          <h4>Ingredients: </h4>
          {renderIngredients()}
          <h4>Instructions: </h4>
          {renderSteps()}
        </div>
      </div>
    </div>
  );
};

export default ViewSelectedSearchRecipe;
