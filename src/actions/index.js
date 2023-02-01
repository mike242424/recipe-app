import axios from "axios";

export const FETCH_RECIPE = "FETCH_RECIPE";
export const FETCH_RANDOM_RECIPE = "FETCH_RANDOM_RECIPE";

export const fetchRecipe = foodItem => {
  const request = axios.get(`https://api.spoonacular.com/recipes/search?apiKey=743f7e7a61604598992d5a1bd1e98511&number=12&query=${foodItem}`)
    .catch(error => {
      console.log(error.message);
  });

  return {
    type: FETCH_RECIPE, 
    payload: request
  }
};

export const fetchRandomRecipe = () => {
  const request = axios.get(`https://api.spoonacular.com/recipes/random?apiKey=743f7e7a61604598992d5a1bd1e98511&number=12`)
    .catch(error => {
      console.log(error.message);
  });

  return {
    type: FETCH_RANDOM_RECIPE, 
    payload: request
  }
};