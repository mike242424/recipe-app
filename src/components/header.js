import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchRecipe } from "../actions";
import { useNavigate } from "react-router";


const Header = () => {
  const [foodItem, setFoodItem] = useState("");
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFoodItem(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchRecipe(foodItem));
    setFoodItem("");
    // navigate("/search");
  }

  return (
  <Navbar bg="success" variant="dark" fixed="top" className="p-3">
    <Container>
      <Navbar.Brand href="/">Highway to FlavorTown</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link className="m-4" href="/random">Get Random Recipe(s)</Nav.Link>
      </Nav>
      <Form onSubmit={handleFormSubmit}>
            <Form.Control 
              className="input-group"
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