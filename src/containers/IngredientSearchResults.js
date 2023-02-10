import { useDispatch, useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import '../app.css';
import {  Card, Container, Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import _ from 'lodash';
import { PacmanLoader } from "react-spinners";
import { useEffect } from "react";
import { setLoading } from "../actions";

const IngredientSearchResults = () => {
  const recipeData = useSelector(state => state.ingredientRecipeData);
  const loading = useSelector(state => state.setLoading);
  const dispatch = useDispatch();

  const override: CSSProperties = {
    margin: "100px 200px",
  };

  useEffect(() => {
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 2000);
  }, [recipeData]);
  
  const renderRecipes = () => {
    if (!_.isEmpty(recipeData) && recipeData.totalResults !== 0) {
      return recipeData.results.map((recipe) =>
      <LinkContainer to={`/ingredientsearch/${recipe.id}`} key={recipe.id}>
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
    } else {
      return (
        <Card>
          <Card.Body className="text-center">
          <Card.Text><FontAwesomeIcon className="fa-5x" icon={ faUserSecret } /></Card.Text>
          <Card.Text>We were unable to find a recipe that incorporates all of the ingredients provided.  Please try again.</Card.Text>
          <LinkContainer to="/ingredientsearch">
            <Button variant="dark">Try Again</Button>
          </LinkContainer>
          </Card.Body>
        </Card>
      )
    }
  }

  return (
    <>
      <Container className="show-random-recipe text-center m-4">
        <Row className="show-recipe">
          {loading ? 
            <PacmanLoader 
              color='#14A44D' 
              size="150px"
              cssOverride={override}
            /> : renderRecipes()}
          </Row>
      </Container>
    </>
  )
}

export default IngredientSearchResults;