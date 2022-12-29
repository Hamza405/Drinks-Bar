import { configureStore } from "@reduxjs/toolkit";
import CocktailsSlice from "./slices/CocktailsSlice";

const store = configureStore({
  reducer: {
    drinks: CocktailsSlice,
  },
});

export default store;
