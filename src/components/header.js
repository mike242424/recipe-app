import RandomRecipeButton from "../containers/random-recipe-button"
import SearchBar from "../containers/search-bar"
import 'bootstrap/dist/css/bootstrap.css';

const Header = () => {
  return (
  <div className="app container text-center">
    <h1 className='m-4' >Find Your Flavor</h1>
    <RandomRecipeButton />
    <SearchBar />
  </div>
  )
};

export default Header;