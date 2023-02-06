import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import _ from 'lodash';


const ViewSelectedRandomRecipe = () => {
  const randomRecipeData = useSelector(state => state.randomRecipeData);
  // console.log(randomRecipeData);
  const { id } = useParams();
  const isRecipe = r => r.id === Number(id);
  const recipe = randomRecipeData.recipes.find(isRecipe);
  console.log(recipe);

  const renderSteps = () => {
    if (!_.isEmpty(recipe)) {
      return recipe.analyzedInstructions[0].steps.map((item, i) =>
      <p key={recipe.id}>{`${i + 1}. ${item.step}`}</p>
      )
    }  
  }

  return (
    <div className="recipe-info text-center" key={recipe.id}>
      <div className="row">
        <div className="col-8 offset-2">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <img className="mb-4" src={recipe.image ? recipe.image : <p>no image</p>} alt={recipe.title} />
          <h1>{recipe.title}</h1>
          <p>Servings: {recipe.servings}</p>
          <p>Cooking Time: {recipe.readyInMinutes} minutes</p>
          {renderSteps()}
        </div>
      </div>
    </div>
  )
  }

  export default ViewSelectedRandomRecipe