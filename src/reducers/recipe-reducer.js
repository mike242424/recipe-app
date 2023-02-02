import { FETCH_RECIPE, FETCH_RECIPE_INFO, FETCH_RANDOM_RECIPE } from '../actions'; 

export const recipeReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_RECIPE: 
      return state = action.payload.data;
    default:
      return state;
  }
}

export const recipeInfoReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_RECIPE_INFO:

    console.log('Specific Recipe Info: ', action.payload.data);

    return state = action.payload.data;
  default:
    return state;
  }
}

export const randomRecipeReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_RANDOM_RECIPE: 
      return state = action.payload.data;
    default:
      return state;
  }
}