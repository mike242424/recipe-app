import RandomRecipeButton from "../containers/random-recipe-button";
import SearchBar from "../containers/search-bar";

const HomePage = () => {
  return (
    <div className="text-center">
      <h1>👋 Welcome! (Home Page)</h1>
      <SearchBar />
      <RandomRecipeButton />
    </div>
  )
};

export default HomePage;