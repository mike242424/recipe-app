import  { fetchRandomRecipe } from "../actions";

import { useDispatch } from "react-redux";

const RandomRecipeButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchRandomRecipe());
  }

  return (
    <div className="random-recipe-button">
      <button onClick={handleClick} className="btn btn-danger mb-4">Get Random Recipes</button>
    </div>
  );
}
 
export default RandomRecipeButton;