import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"


const ViewSelectedRandomRecipe = () => {
  const randomRecipeData = useSelector(state => state.randomRecipeData);
  console.log(randomRecipeData);
  const { id } = useParams();
  const isRecipe = r => r.id === Number(id);
  const recipe = randomRecipeData.recipes.find(isRecipe);
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
          <img className="mb-4" src={recipe.image ? recipe.image : <p>no image</p>} alt={recipe.title} />
          <h1>{recipe.title}</h1>
          <p>Servings: {recipe.servings}</p>
          <p>Cooking Time: {recipe.readyInMinutes} minutes</p>
        </div>
      </div>
    </div>
  )
  }

  export default ViewSelectedRandomRecipe