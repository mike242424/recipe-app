import { FETCH_RECIPE, FETCH_RANDOM_RECIPE } from '../actions'; 

export const recipeReducer = (state = '', action) => {
  switch (action.type) {
    case FETCH_RECIPE: 
      return state = action.payload.data;
    default:
      return state;
  }
}

export const randomRecipeReducer = (state = '', action) => {
  switch (action.type) {
    case FETCH_RANDOM_RECIPE: 
      return state = action.payload.data;
    default:
      return state;
  }
}