import { combineReducers } from "redux";
import { recipeReducer, randomRecipeReducer } from "./recipeReducer";

const rootReducer = combineReducers({
  recipeData: recipeReducer,
  randomRecipeData: randomRecipeReducer
});

export default rootReducer; 