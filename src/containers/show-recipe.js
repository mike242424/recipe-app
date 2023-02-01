import { useSelector } from "react-redux";

const ShowRecipe = () => {
  const recipeData = useSelector(state => state.recipeData);

  const baseUri = "https://spoonacular.com/recipeImages/";

  return (
    <div className="show-recipe row">
      {recipeData && recipeData.results.map((result) =>
      <div className=" card col-md-6  col-lg-4 p-2" key={result.id}>
        {result.image ? <img className="card-img-top" src={`${baseUri}${result.image}`} alt="recipe pic" /> : <span></span>}
        <div className="card-body">
          <h4 className="card-title">{`${result.title}`}</h4>
          <a style={{color: "green", textDecoration: 'none'}} href={result.sourceUrl}><strong>Recipe</strong></a>
          <p className="m-1" >Servings: {result.servings}</p>
          <p>Ready in {result.readyInMinutes} minutes</p>
        </div>
      </div> 
      )}
    </div>
  );
}
 
export default ShowRecipe;