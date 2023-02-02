import { useSelector, useDispatch } from "react-redux";
import { fetchRecipeInfo } from "../actions";
import 'bootstrap/dist/css/bootstrap.css';
import '../app.css';
import {  Card, Container, Row, Col } from "react-bootstrap";
import _ from 'lodash';

const SearchResults = () => {
  const recipeData = useSelector(state => state.recipeData);
  const dispatch = useDispatch();

  const baseUri = "https://spoonacular.com/recipeImages/";

  // need to bind this function to a click on the individual recipe card. the id should be the recipe.id from the first API of the card that was clicked.
  const handleRecipeClick = (id) => {
    dispatch(fetchRecipeInfo(id));
    // on click, route browser to 'search/id' page for more info
  }

  const renderRecipes = () => {
    if (!_.isEmpty(recipeData)) {
      return recipeData.results.map((recipe) =>
      <Col className="mb-4 md-4 d-flex align-items-stretch">
        <Card className="recipe-card" style={{ width: '18rem' }} key={recipe.id}>
          <a href={recipe.sourceUrl} className="text-reset text-decoration-none">
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
          </a>
        </Card>
      </Col>
      )
    }  
  };

  return (
    <>
      <Container className="show-random-recipe text-center">
        <Row className="show-recipe">
          {renderRecipes()}
          </Row>
      </Container>
    </>
  )
}
 
export default SearchResults;