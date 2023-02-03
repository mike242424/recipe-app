import { useSelector } from "react-redux";

import _ from 'lodash';

const RecipePage = () => {
  const recipeInfo = useSelector(state => state.recipeInfo);

  console.log(recipeInfo);
  const renderRecipePage = () => {
    if (!_.isEmpty(recipeInfo)) {
      return recipeInfo.analyzedInstructions[0].steps.map((item, i) => {
        return <p key={i}>{`${i + 1}. ${item.step}`}</p>
      })
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
          <img className="mb-4" src={recipeInfo.image} alt={recipeInfo.title} />
          <h1>{recipeInfo.title}</h1>
          <p>Servings: {recipeInfo.servings}</p>
          <p>Cooking Time: {recipeInfo.readyInMinutes} minutes</p>
          {renderRecipePage()}
        </div>
      </div>
    </div>
  )
};

export default RecipePage;