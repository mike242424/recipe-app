import { FETCH_RECIPE, FETCH_RANDOM_RECIPE, FETCH_RECIPE_BY_INGREDIENT, TOGGLE_IS_LOADING } from '../actions'; 

const initialState = {
  data: {},
  isLoading: false
}

export const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECIPE: 
      return state = action.payload.data;
    default:
      return state;
  }
}

export const randomRecipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RANDOM_RECIPE: 
      return state = action.payload.data;
    default:
      return state;
  }
}

export const recipeIngredientSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECIPE_BY_INGREDIENT:
      return state = action.payload.data;
    default:
      return state;
  }
}

// export const toggleIsLoadingReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case TOGGLE_IS_LOADING:
//       return state = {
//         isLoading: action.payload
//       }
//     default:
//       return state;
//   }
// }