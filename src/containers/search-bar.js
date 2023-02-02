import { useState } from "react";
import { useDispatch } from "react-redux";
import  { fetchRecipe } from "../actions";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Button, Form, Row, Col } from "react-bootstrap";

const SearchBar = () => {
  const [foodItem, setFoodItem] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setFoodItem(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchRecipe(foodItem));
    setFoodItem("");
  }

  return (
    <Container className="app container text-center mb-4">
      <Row className="row">
        <Col className="col-8 offset-2">
          <Form onSubmit={handleFormSubmit}>
            <Form.Control 
              className="input-group mb-3 blah"
              type="search" 
              placeholder="Search For A Recipe"
              value={foodItem}
              onChange={handleInputChange}
              required
            />
            <Button 
              variant="success" 
              type="submit">Search</Button>
          </Form>
          </Col>
      </Row>
    </Container>
  );
}
 
export default SearchBar;