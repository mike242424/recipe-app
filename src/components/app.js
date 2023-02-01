import SearchBar from "../containers/search-bar";
import ShowRandomRecipe from "../containers/show-random-recipe";
import ShowRecipe from "../containers/show-recipe";

import  { fetchRandomRecipe } from "../actions";

import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchRandomRecipe());
  }

  return (
    <div className="app container text-center">
      <h1 className='m-4' >Find Your Flavor</h1>
      <button onClick={handleClick} className="btn btn-danger mb-4">Get Random Recipes</button>
      <SearchBar />
      <ShowRecipe />
      <ShowRandomRecipe />
    </div>
  );
}
 
export default App;