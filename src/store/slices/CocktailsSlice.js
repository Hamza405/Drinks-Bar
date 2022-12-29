import { createSlice } from "@reduxjs/toolkit";

const initValue = {
  cocktailsList: [],
  categoriesList: [],
  ingredientsList: [],
  glassesList: [],
};

const todoSlice = createSlice({
  name: "Cocktails",
  initialState: initValue,
  reducers: {
    replaceDrinks: (state, action) => {
      state.cocktailsList = action.payload;
    },
  },
});

export const { replaceDrinks } = todoSlice.actions;
export default todoSlice.reducer;
