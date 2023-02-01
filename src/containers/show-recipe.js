import { useSelector, useDispatch } from "react-redux";
import { fetchRecipeInfo } from "../actions";

const ShowRecipe = () => {
  const recipeData = useSelector(state => state.recipeData);
  const dispatch = useDispatch();

  const baseUri = "https://spoonacular.com/recipeImages/";
  
  const handleRecipeClick = (id) => {
    dispatch(fetchRecipeInfo(id));
    // route to individual recipe/id page for more info?
  }

  return (
    <div className="show-recipe row">
      {recipeData && recipeData.results.map((result) =>
      <div className=" card col-md-6  col-lg-4 p-2" key={result.id}>
        <img className="card-img-top" src={`${baseUri}${result.image}`} alt="recipe pic" />
        <div className="card-body">
          <h4 className="card-title">{`${result.title}`}</h4>
          <a style={{color: "green", textDecoration: 'none'}} href={result.sourceUrl}><strong>Recipe</strong></a>
          <p className="m-1" >Servings: {result.servings}</p>
          <p>Ready in {result.readyInMinutes} minutes</p>
          <button className="btn btn-primary" onClick={() => handleRecipeClick(result.id)}>Recipe Info</button>
        </div>
      </div> 
      )}
    </div>
  );
}
 
export default ShowRecipe;