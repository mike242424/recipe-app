import RandomButton from "../containers/random-button";
import SearchBar from "../containers/search-bar";
import ShowRandomRecipe from "../containers/show-random-recipe";
import ShowRecipe from "../containers/show-recipe";


const App = () => {

  return (
    <div className="app container text-center">
      <h1 className='m-4' >Find Your Flavor</h1>
      <RandomButton />
      <SearchBar />
      <ShowRecipe />
      <ShowRandomRecipe />
    </div>
  );
}
 
export default App;