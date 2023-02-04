import axios from "axios";

export const FETCH_RECIPE = "FETCH_RECIPE";
export const FETCH_RECIPE_INFO = "FETCH_RECIPE_INFO";
export const FETCH_RANDOM_RECIPE = "FETCH_RANDOM_RECIPE";

export const fetchRecipe = foodItem => {
  const API_KEY = process.env.REACT_APP_MIKE_SPOON_API_KEY
  const request = axios.get(`https://api.spoonacular.com/recipes/search?apiKey=${API_KEY}&number=12&addRecipeInformation=true&query=${foodItem}`)
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
// export const fetchRecipeInfo = id => {
//   const API_KEY = process.env.REACT_APP_JOHNNY_SPOON_API_KEY;
//   const request = axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
//     .catch(error => {
//       console.error(error.message);
//       return;
//     });

//   return {
//     type: FETCH_RECIPE_INFO,
//     payload: request
//   }
// };

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