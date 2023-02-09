import axios from "axios";

export const FETCH_RECIPE = "FETCH_RECIPE";
export const FETCH_RANDOM_RECIPE = "FETCH_RANDOM_RECIPE";
export const FETCH_RECIPE_BY_INGREDIENT = "FETCH_RECIPE_BY_INGREDIENT";

export const SET_LOADER = 'SET_LOADER';

export const fetchRecipe = foodItem => {
  const API_KEY = process.env.REACT_APP_MIKE_SPOON_API_KEY
  const request = axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=12&query=${foodItem}&addRecipeInformation=true&fillIngredients=true&instructionsRequired=true`)
    .catch(error => {
      console.error(error.message);
      return;
  });

  return {
    type: FETCH_RECIPE, 
    payload: request
  }
};

export const fetchRandomRecipe = () => {
  const API_KEY = process.env.REACT_APP_MIKE_SPOON_API_KEY;
  const request = axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=12`)
    .catch(error => {
      console.error(error.message);
      return;
  });

  return {
    type: FETCH_RANDOM_RECIPE, 
    payload: request
  }
};

export const fetchRecipeByIngredient = ingredients => {
  const API_KEY = process.env.REACT_APP_MIKE_SPOON_API_KEY
  const request = axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=12&includeIngredients=${ingredients}&addRecipeInformation=true&fillIngredients=true&instructionsRequired=true`)
    .catch(error => {
      console.error(error.message);
      return;
  });

  return {
    type: FETCH_RECIPE_BY_INGREDIENT, 
    payload: request
  }
};

export const setLoading = (boolean) => {
  return {
      type : SET_LOADER,
      payload : boolean
  }
}
