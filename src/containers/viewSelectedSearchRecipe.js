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
      <ul>
        <li>{`${item.measures.us.amount} ${item.measures.us.unitShort} ${item.originalName}`}</li>
      </ul>
      )
    }  
  }
  
  const renderSteps = () => {
    if (!_.isEmpty(recipe)) {
      return recipe.analyzedInstructions.map((item) => {
        return item.steps.map(m => {
          return <p>{`${m.number}. ${m.step}`}</p>
        })
      })
    } 
  }
 
  return (
    <div className="recipe-info">
      <div className="row">
        <div className="col-8 offset-2">
          <br />
          <br />
          <h1 className="pt-0 pb-3 text-center">{recipe.title}</h1>
          <div className="text-center">
            <img
              className="mb-4"
              src={recipe.image ? recipe.image : <p>no image</p>}
              alt={recipe.title}
            />
          </div>
          <p className="text-center"><strong>Servings: </strong>{recipe.servings}</p>
          <p className="text-center"><strong>Cooking Time: </strong>{recipe.readyInMinutes} minutes</p>
          <h4 className="mb-4 text-center" style={{textDecoration: "underline"}}><strong>Ingredients: </strong></h4>
          {renderIngredients()}
          <h4 className="mb-4 text-center" style={{textDecoration: "underline"}}><strong>Instructions: </strong></h4>
          {renderSteps()}
        </div>
      </div>
    </div>
  );
};

export default ViewSelectedSearchRecipe;
