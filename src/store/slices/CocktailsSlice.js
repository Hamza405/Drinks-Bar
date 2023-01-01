import { createSlice } from "@reduxjs/toolkit";

const initValue = {
  cocktailsList: [],
  categoriesList: [],
  ingredientsList: [],
  alcoholicTypesList: [],
  glassesList: [],
  orderCommand: {
    personalInfo: {},
    orderInfo: {},
  },
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
    replaceAlcoholic: (state, action) => {
      state.alcoholicTypesList = action.payload;
    },
    setOrderPersonalInfo: (state, action) => {
      state.orderCommand.personalInfo = {
        ...action.payload,
      };
    },
    setOrderInfo: (state, action) => {
      state.orderCommand.orderInfo = {
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
  replaceAlcoholic,
  setOrderPersonalInfo,
  setOrderInfo,
  clearOrderCommand,
} = todoSlice.actions;
export default todoSlice.reducer;
