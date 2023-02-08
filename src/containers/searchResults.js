import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import '../app.css';
import {  Card, Container, Row, Col } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'
import _ from 'lodash';


const SearchResults = () => {
  const recipeData = useSelector(state => state.recipeData);

  const renderRecipes = () => {
    if (recipeData && recipeData.results.length === 0) {
      console.log('Error')
      alert('Please choose a valid food item');
    }

    if (!_.isEmpty(recipeData)) {
      return recipeData.results.map((recipe) =>
      <LinkContainer to={`/search/${recipe.id}`} key={recipe.id}>
        <Col className="mb-4 md-4 d-flex align-items-stretch">
          <Card className="recipe-card" style={{ width: '18rem' }}>
            {recipe.image ? <Card.Img 
              variant="top" 
              src={`${recipe.image}`} 
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
      <Container className="show-random-recipe text-center m-4">
        <Row className="show-recipe">
          {renderRecipes()}
          </Row>
      </Container>
    </>
  )
}
 
export default SearchResults;