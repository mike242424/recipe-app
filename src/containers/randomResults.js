import { CSSProperties } from "react";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import "../app.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import _ from "lodash";
import PacmanLoader from "react-spinners/PacmanLoader";

const RandomResults = () => {
  // component that renders random recipes
  const randomRecipeData = useSelector((state) => state.randomRecipeData);
  const setLoading = useSelector((state) => state.setLoading);

  // overrides pacman loading spinner styles
  const override: CSSProperties = {
    margin: "100px 200px",
  };

  const renderRandomRecipes = () => {
    // logic for when user input does retrieve recipes from API
    if (!_.isEmpty(randomRecipeData)) {
      return randomRecipeData.recipes.map((recipe) => (
        <LinkContainer to={`/random/${recipe.id}`} key={recipe.id}>
          <Col className="mb-4 mt-4 d-flex align-items-stretch">
            <Card className="recipe-card" style={{ width: "18rem" }}>
              {recipe.image ? (
                <Card.Img variant="top" src={recipe.image} alt={recipe.title} />
              ) : (
                <span></span>
              )}
              <Card.Body className="text-center">
                <Card.Title>{recipe.title}</Card.Title>
                <Card.Text>Servings: {recipe.servings}</Card.Text>
                <Card.Text>Ready in {recipe.readyInMinutes} minutes</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </LinkContainer>
      ));
    }
  };

  return (
    <>
      <Container className="show-random-recipe text-center m-4">
        <Row className="show-recipe">
          {setLoading ? (
            <PacmanLoader color="#14A44D" size="150px" cssOverride={override} />
          ) : (
            renderRandomRecipes()
          )}
        </Row>
      </Container>
    </>
  );
};

export default RandomResults;
