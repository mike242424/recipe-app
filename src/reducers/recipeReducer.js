import { FETCH_RECIPE, FETCH_RANDOM_RECIPE, FETCH_RECIPE_BY_INGREDIENT, SET_LOADER } from '../actions'; 

// reducer for the fetch recipe query
export const recipeReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_RECIPE: 
      return state = action.payload.data;
    default:
      return state;
  }
}

// reducer for random recipes
export const randomRecipeReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_RANDOM_RECIPE: 
      return state = action.payload.data;
    default:
      return state;
  }
}

// reducer for fetching recipes by ingredients
export const recipeIngredientSearchReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_RECIPE_BY_INGREDIENT:
      return state = action.payload.data;
    default:
      return state;
  }
}

// reducer for the pacman loading spinner
export const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case SET_LOADER:
      return state = action.payload;
    default: 
      return state;
  }
}
