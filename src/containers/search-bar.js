import { useState } from "react";
import { useDispatch } from "react-redux";
import  { fetchRecipe } from "../actions";

const SearchBar = () => {
  const [foodItem, setFoodItem] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setFoodItem(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchRecipe(foodItem));
    setFoodItem("");
  }

  return (
    <div className="app container text-center mb-4">
      <div className="row">
        <div className="col-8 offset-2">
        <form onSubmit={handleFormSubmit}>
          <div className="input-group mb-3">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Search For A Recipe"
                value={foodItem}
                onChange={handleInputChange}
                required
                />
              <button 
                className="btn btn-outline-success" 
                type="submit"
              >Search</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
 
export default SearchBar;