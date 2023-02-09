import { Row, Container, Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch } from "react-redux";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { fetchRecipeByIngredient, setLoading } from "../actions";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const ingredientsSchema = yup.object({
  ingredient1: yup.string().required('You must provide at least one item from your refrigerator or pantry').max(20),
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
  const navigate = useNavigate();

  const handleFormSubmit = (data) => {
    const ingredients = Object.values(data);
    const namedIngredients = ingredients.filter(item => item).join();
    const ingredientsInputValue = namedIngredients.split(" ").join("");
    console.log(ingredientsInputValue)
    dispatch(fetchRecipeByIngredient(ingredientsInputValue));
    reset();
    navigate("/ingredientsearch/results");
  }
 
  return (
    <>
    <Container className="text-center m-4">
      <Row>
        <h1>What's In Your Fridge/Pantry?</h1>
      </Row>
      <Row>
        <Form className="d-flex" onSubmit={handleSubmit(handleFormSubmit)}>
          <Form.Group className="mb-3">
            <Form.Control 
              className="input-group mt-3 me-2"
              type="search" 
              placeholder="Ingredient 1"
              {...register("ingredient1")}
                />
            {errors.ingredient1?.message}
            <Form.Control 
              className="input-group mt-3 me-2"
              type="search" 
              placeholder="Ingredient 2"
              {...register("ingredient2")}
                />
            {errors.ingredient2?.message}
            <Form.Control 
              className="input-group mt-3 me-2"
              type="search" 
              placeholder="Ingredient 3"
              {...register("ingredient3")}
                />
            {errors.ingredient3?.message}
            <Form.Control 
              className="input-group mt-3 me-2"
              type="search" 
              placeholder="Ingredient 4"
              {...register("ingredient4")}
                />
            {errors.ingredient4?.message}
            <Form.Control 
              className="input-group mt-3 me-2"
              type="search" 
              placeholder="Ingredient 5"
              {...register("ingredient5")}
                />
            {errors.ingredient5?.message}
            <Button className="mt-3" variant="dark" type="submit">Search</Button>
          </Form.Group>
        </Form>
      </Row>
    </Container>
  </>
  )
}

export default IngredientSearch;