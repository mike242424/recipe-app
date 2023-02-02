import { combineReducers } from "redux";
import { recipeReducer, recipeInfoReducer } from "./recipe-reducer";
import { randomRecipeReducer } from "./recipe-reducer";

const rootReducer = combineReducers({
  recipeData: recipeReducer,
  recipeInfo: recipeInfoReducer,
  randomRecipeData: randomRecipeReducer
});

export default rootReducer; 