import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";
import { useDispatch } from "react-redux";
import  { fetchRandomRecipe } from "../actions";
import { fetchRecipe, setLoading } from "../actions";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoad, faUtensils } from '@fortawesome/free-solid-svg-icons'
import '../app.css';

const Header = () => {
  // component that renders navbar
  const [foodItem, setFoodItem] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // retrieves users query in input and puts into local state
  const handleInputChange = (e) => {
    setFoodItem(e.target.value);
  }

  // component that dispatches query results to the redux store
  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate("/search");
    dispatch(setLoading(true));
    dispatch(fetchRecipe(foodItem));
    setTimeout(() => {
      setFoodItem("");
      dispatch(setLoading(false));
    }, 2000);
  }

  // component that dispatches random recipes to the redux store
  const handleClick = () => {
    dispatch(setLoading(true));
    dispatch(fetchRandomRecipe());
    navigate("/random");
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 2000);
  }
  // navigates to ingredientsearch when clicked
  const handleIngredientSearchClick = () => {
    navigate("/ingredientsearch");
  }

  return (
  <Navbar bg="success" variant="dark" static="top">
    <Container>
      <Navbar.Brand href="/">
        <FontAwesomeIcon icon={faRoad} /> Highway to Flavortown <FontAwesomeIcon icon={faUtensils} />
      </Navbar.Brand>
      <Nav className="me-auto">
          <Nav.Link onClick={handleClick} className="m-4">Get Random Recipe(s)</Nav.Link>
          <Nav.Link onClick={handleIngredientSearchClick} className="m-4">Search by Ingredient(s)</Nav.Link>
      </Nav>
      <Form className="d-flex" onSubmit={handleFormSubmit}>
        <Form.Control 
          className="input-group me-2"
          type="search" 
          placeholder="Search For A Recipe"
          value={foodItem}
          onChange={handleInputChange}
          required
        />
        <Button variant="light" type="submit">Search</Button>
      </Form>
    </Container>
  </Navbar>
  )
};

export default Header;