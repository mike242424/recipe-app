import { FETCH_RECIPE, FETCH_RANDOM_RECIPE, FETCH_RECIPE_BY_INGREDIENT } from '../actions'; 

export const recipeReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_RECIPE: 
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

export const recipeIngredientSearchReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_RECIPE_BY_INGREDIENT:
      return state = action.payload.data;
    default:
      return state;
  }
}