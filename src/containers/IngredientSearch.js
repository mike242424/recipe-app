import { Row, Container, Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch } from "react-redux";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { fetchRecipeByIngredient } from "../actions";
import * as yup from "yup";
import IngredientSearchResults from "./IngredientSearchResults";

const ingredientsSchema = yup.object({
  ingredient1: yup.string().required('You must provide at least one ingredient').max(20),
  ingredient2: yup.string().max(20),
  ingredient3: yup.string().max(20),
  ingredient4: yup.string().max(20),
  ingredient5: yup.string().max(20),
})


const IngredientSearch = (props) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(ingredientsSchema)
  });
  
  const dispatch = useDispatch();

  const handleFormSubmit = (data) => {
    const ingredients = Object.values(data);
    const namedIngredients = ingredients.filter(item => item).join();
    const ingredientsInputValue = namedIngredients.split(" ").join("");
    console.log(ingredientsInputValue)
    dispatch(fetchRecipeByIngredient(ingredientsInputValue));
    reset();
  }

  return (
    <>
    <Container className="text-center m-4">
      <Row>
        <h1>What's In Your Refrigerator?</h1>
      </Row>
      <Row className="text-center">
        <Form className="d-flex" onSubmit={handleSubmit(handleFormSubmit)}>
          <Form.Group className="mb-3">
            <Form.Control 
              className="input-group"
              type="search" 
              placeholder="Ingredient 1"
              {...register("ingredient1")}
                />
            {errors.ingredients?.message}
            <Form.Control 
              className="input-group me-2"
              type="search" 
              placeholder="Ingredient 2"
              {...register("ingredient2")}
                />
            {errors.ingredients?.message}
            <Form.Control 
              className="input-group me-2"
              type="search" 
              placeholder="Enter Ingredients Here"
              {...register("ingredient3")}
                />
            {errors.ingredients?.message}
            <Form.Control 
              className="input-group me-2"
              type="search" 
              placeholder="Enter Ingredients Here"
              {...register("ingredient4")}
                />
            {errors.ingredients?.message}
            <Form.Control 
              className="input-group me-2"
              type="search" 
              placeholder="Enter Ingredients Here"
              {...register("ingredient5")}
                />
            {errors.ingredients?.message}
            <Button variant="dark" type="submit">Search</Button>
          </Form.Group>
        </Form>
      </Row>
    </Container>
    <IngredientSearchResults />
  </>
  )
}

export default IngredientSearch