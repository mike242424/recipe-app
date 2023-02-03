import { useSelector, useDispatch } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import '../app.css';
import {  Card, Container, Row, Col } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import { fetchRecipeInfo } from "../actions";
import _ from 'lodash';

import { useEffect } from "react";

const RandomResults = () => {
  const randomRecipeData = useSelector(state => state.randomRecipeData);
  const dispatch = useDispatch();
  const handleRecipeClick = (id) => {
    dispatch(fetchRecipeInfo(id));
  }
  
  const renderRandomRecipes = () => {
    if (!_.isEmpty(randomRecipeData)) {
      return randomRecipeData.recipes.map((recipe) =>
        <LinkContainer to={`/${recipe.id}`} onClick={handleRecipeClick(recipe.id)} key={recipe.id}>
          <Col className="mb-4 md-4 d-flex align-items-stretch">
            <Card className="recipe-card" style={{ width: '18rem' }} >
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
            </Card>
          </Col>
        </LinkContainer>
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
 
export default RandomResults;