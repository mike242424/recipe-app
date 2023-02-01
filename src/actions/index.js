import axios from "axios";

export const FETCH_RECIPE = "FETCH_RECIPE";
export const FETCH_RECIPE_INFO = "FETCH_RECIPE_INFO";
export const FETCH_RANDOM_RECIPE = "FETCH_RANDOM_RECIPE";

export const fetchRecipe = foodItem => {
  const request = axios.get(`https://api.spoonacular.com/recipes/search?apiKey=743f7e7a61604598992d5a1bd1e98511&number=12&query=${foodItem}`)
    .catch(error => {
      console.error(error.message);
      return;
  });

  return {
    type: FETCH_RECIPE, 
    payload: request
  }
};

// Use the id of whichever recipe was clicked on to search the recipe info API for more info.
export const fetchRecipeInfo = id => {
  const request = axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=743f7e7a61604598992d5a1bd1e98511`)
    .catch(error => {
      console.error(error.message);
      return;
    });

  return {
    type: FETCH_RECIPE_INFO,
    payload: request
  }
};

export const fetchRandomRecipe = () => {
  const request = axios.get(`https://api.spoonacular.com/recipes/random?apiKey=743f7e7a61604598992d5a1bd1e98511&number=12`)
    .catch(error => {
      console.error(error.message);
      return;
  });

  return {
    type: FETCH_RANDOM_RECIPE, 
    payload: request
  }
};