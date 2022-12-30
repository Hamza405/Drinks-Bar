import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAlcoholicTypesRequest,
  getCategoriesRequest,
  getGlassesRequest,
  getIngredientsRequest,
} from "./api/CocktailsApi";
import "./App.css";
import Cocktails from "./components/Cocktails";
import Header from "./components/Header";
import Modal from "./components/Modal";
import { getDrinks } from "./store/actions/CocktailsActions";

function App() {
  const modalIsOpen = useSelector((state) => state.ui.modalIsOpen);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDrinks());
  }, []);
  return (
    <div className="App">
      <Header />
      <Cocktails />
      {modalIsOpen && <Modal />}
    </div>
  );
}

export default App;
