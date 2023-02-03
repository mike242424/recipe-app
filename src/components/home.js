// import RandomRecipeButton from "../containers/random-recipe-button";
// import SearchBar from "../containers/search-bar";
import { Container } from 'react-bootstrap';


const HomePage = () => {
  return (
    <Container className="text-center home-page mt-40">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>👋 Welcome to Highway to FlavorTown!</h1>
      <h4 className="p-2">Here, you are able search for recipes by ingredient or receive  random recipe ideas</h4>
      {/* <SearchBar /> */}
      {/* <RandomRecipeButton /> */}
    </Container>
  )
};

export default HomePage;