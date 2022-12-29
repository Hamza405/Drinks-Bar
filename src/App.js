import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getAlcoholicTypesRequest,
  getCategoriesRequest,
  getGlassesRequest,
  getIngredientsRequest,
} from "./api/CocktailsApi";
import "./App.css";
import Cocktails from "./components/Cocktails";
import Header from "./components/Header";
import { getDrinks } from "./store/actions/CocktailsActions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDrinks());
  }, []);
  return (
    <div className="App">
      <Header />
      <Cocktails />
    </div>
  );
}

export default App;
