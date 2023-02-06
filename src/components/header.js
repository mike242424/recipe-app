import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";
import { useDispatch } from "react-redux";
import  { fetchRandomRecipe } from "../actions";
import { fetchRecipe } from "../actions";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoad, faUtensils } from '@fortawesome/free-solid-svg-icons'
import '../app.css';


const Header = () => {
  const [foodItem, setFoodItem] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFoodItem(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchRecipe(foodItem));
    setFoodItem("");
    navigate("/search");
  }

  const handleClick = () => {
    dispatch(fetchRandomRecipe())
    navigate("/random");
  }

  return (
  <Navbar bg="success" variant="dark" static="top">
    <Container>
      <Navbar.Brand href="/">
        <FontAwesomeIcon icon={faRoad} /> Highway to Flavortown <FontAwesomeIcon icon={faUtensils} />
      </Navbar.Brand>
      <Nav className="me-auto">
          <Nav.Link onClick={handleClick} className="m-4">Get Random Recipe(s)</Nav.Link>
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