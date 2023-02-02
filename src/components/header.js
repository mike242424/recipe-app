import RandomRecipeButton from "../containers/random-recipe-button"
import SearchBar from "../containers/search-bar"
import 'bootstrap/dist/css/bootstrap.css';

const Header = () => {
  return (
  <div className="header container text-center">
    <nav
      className="navbar navbar-default navbar-fixed-top navbar-dark bg-success p-3"
    >
      <div>
            <a className="m-4" style={{color:"white", textDecoration: "none"}} href="/">Home</a>
            <a className="m-4" style={{color:"white", textDecoration: "none"}} href="/search">Search Recipe</a>
            <a className="m-4" style={{color:"white", textDecoration: "none"}} href="/random">Random Recipe</a>
      </div>
    </nav>
    <h1 className='m-4' >Find Your Flavor</h1>
    <RandomRecipeButton />
    <SearchBar />
  </div>
  )
};

export default Header;