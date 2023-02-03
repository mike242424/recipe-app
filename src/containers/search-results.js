import { useSelector, useDispatch } from "react-redux";
import { fetchRecipeInfo } from "../actions";
import 'bootstrap/dist/css/bootstrap.css';
import '../app.css';
import {  Card, Container, Row, Col } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'
import _ from 'lodash';
// import SearchBar from "./search-bar";

const SearchResults = () => {
  const recipeData = useSelector(state => state.recipeData);
  const dispatch = useDispatch();
  const baseUri = "https://spoonacular.com/recipeImages/";
  const handleRecipeClick = (id) => {
    dispatch(fetchRecipeInfo(id));
  }

  const renderRecipes = () => {
    if (!_.isEmpty(recipeData)) {
      return recipeData.results.map((recipe) =>
      <LinkContainer to={`/${recipe.id}`} onClick={handleRecipeClick(recipe.id)} key={recipe.id}>
        <Col className="mb-4 md-4 d-flex align-items-stretch">
          <Card className="recipe-card" style={{ width: '18rem' }}>
            {recipe.image ? <Card.Img 
              variant="top"
              style={{aspectRatio: "1/1", objectFit: "cover", width: "100%", height: "45vh"}} 
              src={`${baseUri}${recipe.image}`} 
              alt={recipe.title} /> : <span></span>}
            <Card.Body className="text-center">
              <Card.Title>{recipe.title}</Card.Title>
              <Card.Text>Servings: {recipe.servings}</Card.Text>
              <Card.Text>Ready in {recipe.readyInMinutes} minutes</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </LinkContainer>
      )
    }  
  };

  return (
    <>
      <Container className="show-random-recipe text-center">
        {/* <SearchBar /> */}
        <Row className="show-recipe">
          {renderRecipes()}
          </Row>
      </Container>
    </>
  )
}
 
export default SearchResults;