import { useSelector } from "react-redux";

const ShowRandomRecipe = () => {
  const randomRecipeData = useSelector(state => state.randomRecipeData);

  return (
    <div className="show-random-recipe">
      <div className="show-recipe row">
      {randomRecipeData && randomRecipeData.recipes.map((recipe) =>
      <div className=" card col-md-6  col-lg-4 p-2" key={recipe.id}>
        {<img className="card-img-top" src={recipe.image} alt="recipe pic" />}
        <div className="card-body">
          <h4 className="card-title">{recipe.title}</h4>
          <a style={{color: "green", textDecoration: 'none'}} href={recipe.sourceUrl}><strong>Recipe</strong></a>
          <p className="m-1" >Servings: {recipe.servings}</p>
          <p>Ready in {recipe.readyInMinutes} minutes</p>
        </div>
      </div> 
      )}
    </div>
    </div>
  );
}
 
export default ShowRandomRecipe;