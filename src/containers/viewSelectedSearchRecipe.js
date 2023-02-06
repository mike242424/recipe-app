import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ViewSelectedSearchRecipe = () => {
  const recipeData = useSelector(state => state.recipeData);
  console.log(recipeData);
  const { id } = useParams();
  const isRecipe = r => r.id === Number(id);
  const recipe = recipeData.results.find(isRecipe);
  console.log(recipe);
 
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
        </div>
      </div>
    </div>
  );
};

export default ViewSelectedSearchRecipe;
