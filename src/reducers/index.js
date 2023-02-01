import { combineReducers } from "redux";
import { recipeReducer } from "./recipe-reducer";
import { randomRecipeReducer } from "./recipe-reducer";

const rootReducer = combineReducers({
  recipeData: recipeReducer,
  randomRecipeData: randomRecipeReducer
});

export default rootReducer; 