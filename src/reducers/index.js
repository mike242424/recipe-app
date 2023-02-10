import { combineReducers } from "redux";
import { recipeReducer, randomRecipeReducer, recipeIngredientSearchReducer, loadingReducer } from "./recipeReducer";

// combines all reducers into one to send to the store
const rootReducer = combineReducers({
  recipeData: recipeReducer,
  randomRecipeData: randomRecipeReducer,
  ingredientRecipeData: recipeIngredientSearchReducer, 
  setLoading: loadingReducer
});

export default rootReducer; 