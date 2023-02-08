import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import _ from 'lodash';


const ViewSelectedRandomRecipe = () => {
  const randomRecipeData = useSelector(state => state.randomRecipeData);
  const { id } = useParams();
  const isRecipe = r => r.id === Number(id);
  const recipe = randomRecipeData.recipes.find(isRecipe);

  const renderIngredients = () => {
    if (!_.isEmpty(recipe)) {
      return recipe.extendedIngredients.map((item, index) =>
          <li className="m-3" key={index}>{`${item.measures.us.amount} ${item.measures.us.unitShort} ${item.originalName}`}</li>
      )
    }  
  }
  
  const renderSteps = () => { 
    if (!_.isEmpty(recipe)) {
      return recipe.analyzedInstructions.map(item => {
        return item.steps.map((m, index) => {
          return <p className="text-left" key={index}>{`${m.number}. ${m.step}`}</p>
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
          <h1 className="pt-0 pb-3 text-center text-success"><strong>{recipe.title}</strong></h1>
          <div className="text-center">
            <img
              className="mb-4"
              src={recipe.image ? recipe.image : <p>no image</p>}
              alt={recipe.title}
            />
          </div>
          <p className="text-center"><strong>Servings: </strong>{recipe.servings}</p>
          <p className="text-center"><strong>Cooking Time: </strong>{recipe.readyInMinutes} minutes</p>
          <h4 className="mb-4 text-center text-success" style={{textDecoration: "underline"}}><strong>Ingredients: </strong></h4>
          <ul className="p-0"> 
            {renderIngredients()}
          </ul>
          <h4 className="mb-4 text-center text-success" style={{textDecoration: "underline"}}><strong>Instructions: </strong></h4>
          {renderSteps()}
        </div>
      </div>
    </div>
  )
  }

  export default ViewSelectedRandomRecipe