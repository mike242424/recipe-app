import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import '../app.css';
import {  Card, Container, Row, Col } from "react-bootstrap";
import _ from 'lodash';

const ShowRandomRecipe = () => {
  const randomRecipeData = useSelector(state => state.randomRecipeData);

  const renderRandomRecipes = () => {
    if (!_.isEmpty(randomRecipeData)) {
      return randomRecipeData.recipes.map((recipe) =>
      <Col className="mb-4 md-4 d-flex align-items-stretch">
        <Card className="recipe-card" style={{ width: '18rem' }} key={recipe.id}>
          <a href={recipe.sourceUrl} className="text-reset text-decoration-none">
          {recipe.image ? <Card.Img 
            variant="top"
            style={{aspectRatio: "1/1", objectFit: "cover", width: "100%", height: "45vh"}}
            src={recipe.image} 
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
          {renderRandomRecipes()}
          </Row>
      </Container>
    </>
  )
}
 
export default ShowRandomRecipe;