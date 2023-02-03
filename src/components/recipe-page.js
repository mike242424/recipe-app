import { useSelector } from "react-redux";

const RecipePage = () => {
  const recipeInfo = useSelector(state => state.recipeInfo);

  // should be the state object
  console.log(recipeInfo);

  return (
    <p>someday soon there will be data here for recipe, ingredients, etc.!</p>
  )
};

export default RecipePage;