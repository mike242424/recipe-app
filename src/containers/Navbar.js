import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchRandomRecipe } from "../actions";
import { fetchRecipe, setLoading } from "../actions";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoad, faUtensils } from "@fortawesome/free-solid-svg-icons";
import "../app.css";

const NavigationBar = () => {
  const [foodItem, setFoodItem] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFoodItem(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate("/search");
    dispatch(setLoading(true));
    dispatch(fetchRecipe(foodItem));
    setTimeout(() => {
      setFoodItem("");
      dispatch(setLoading(false));
    }, 2000);
  };

  const handleClick = () => {
    dispatch(setLoading(true));
    dispatch(fetchRandomRecipe());
    navigate("/random");
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 2000);
  };

  const handleIngredientSearchClick = () => {
    navigate("/ingredientsearch");
  };

  return (
    <Navbar bg="success" variant="dark" expand="lg" fixed="top" className="navbar-style">
      <Container>
        <Navbar.Brand href="/">
          <FontAwesomeIcon icon={faRoad} /> Highway to FlavorTown{" "}
          <FontAwesomeIcon icon={faUtensils} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={handleClick} className="m-4">
              Get Random Recipe(s)
            </Nav.Link>
            <Nav.Link onClick={handleIngredientSearchClick} className="m-4">
              Search by Ingredient(s)
            </Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleFormSubmit}>
            <Form.Control
              className="input-group me-2"
              type="search"
              placeholder="Recipe Category"
              value={foodItem}
              onChange={handleInputChange}
              required
            />
            <Button variant="light" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
