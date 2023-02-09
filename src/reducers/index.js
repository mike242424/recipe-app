import { combineReducers } from "redux";
import { recipeReducer, randomRecipeReducer, recipeIngredientSearchReducer, loadingReducer } from "./recipeReducer";

const rootReducer = combineReducers({
  recipeData: recipeReducer,
  randomRecipeData: randomRecipeReducer,
  ingredientRecipeData: recipeIngredientSearchReducer, 
  setLoading: loadingReducer
});

export default rootReducer; 