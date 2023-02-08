import { combineReducers } from "redux";
import { recipeReducer, randomRecipeReducer, recipeIngredientSearchReducer } from "./recipeReducer";

const rootReducer = combineReducers({
  recipeData: recipeReducer,
  randomRecipeData: randomRecipeReducer,
  ingredientRecipeData: recipeIngredientSearchReducer
});

export default rootReducer; 