import  { fetchRandomRecipe } from "../actions";

import { useDispatch } from "react-redux";

const RandomButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchRandomRecipe());
  }
  return (
    <div className="random-button">
      <button onClick={handleClick} className="btn btn-danger mb-4">Get Random Recipes</button>
    </div>
  );
}
 
export default RandomButton;