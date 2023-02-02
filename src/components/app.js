import SearchBar from "../containers/search-bar";
import ShowRandomRecipe from "../containers/show-random-recipe";
import ShowRecipe from "../containers/show-recipe";
import 'bootstrap/dist/css/bootstrap.css';
import RandomRecipeButton from "../containers/random-recipe-button";

const App = () => {
  
  return (
    <div className="app container text-center">
      <h1 className='m-4' >Find Your Flavor</h1>
      <RandomRecipeButton />
      <SearchBar />
      <ShowRecipe />
      <ShowRandomRecipe />
    </div>
  );
}
 
export default App;