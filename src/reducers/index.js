import { combineReducers } from "redux";
import { recipeReducer, recipeInfoReducer, randomRecipeReducer } from "./recipeReducer";

const rootReducer = combineReducers({
  recipeData: recipeReducer,
  // recipeInfo: recipeInfoReducer,
  randomRecipeData: randomRecipeReducer
});

export default rootReducer; 