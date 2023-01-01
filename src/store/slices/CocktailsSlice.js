import { createSlice } from "@reduxjs/toolkit";

const initValue = {
  cocktailsList: [],
  categoriesList: [],
  ingredientsList: [],
  glassesList: [],
  orderCommand: {},
};

const todoSlice = createSlice({
  name: "Cocktails",
  initialState: initValue,
  reducers: {
    replaceDrinks: (state, action) => {
      state.cocktailsList = action.payload;
    },
    replaceIngredients: (state, action) => {
      state.ingredientsList = action.payload;
    },
    replaceCategories: (state, action) => {
      state.categoriesList = action.payload;
    },
    replaceGlasses: (state, action) => {
      state.glassesList = action.payload;
    },
    setOrderCommand: (state, action) => {
      state.orderCommand = {
        ...state.orderCommand,
        ...action.payload,
      };
    },
    clearOrderCommand: (state) => {
      state.orderCommand = {};
    },
  },
});

export const {
  replaceDrinks,
  replaceCategories,
  replaceGlasses,
  replaceIngredients,
  setOrderCommand,
  clearOrderCommand,
} = todoSlice.actions;
export default todoSlice.reducer;
