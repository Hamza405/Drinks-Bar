import { configureStore } from "@reduxjs/toolkit";
import CocktailsSlice from "./slices/CocktailsSlice";
import UiSlice from "./slices/UiSlice";

const store = configureStore({
  reducer: {
    drinks: CocktailsSlice,
    ui: UiSlice,
  },
});

export default store;
