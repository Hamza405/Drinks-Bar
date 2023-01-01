import {
  getAlcoholicTypesRequest,
  getCategoriesRequest,
  getCocktailsRequest,
  getGlassesRequest,
  getIngredientsRequest,
} from "../../api/CocktailsApi";
import {
  replaceCategories,
  replaceDrinks,
  replaceGlasses,
  replaceIngredients,
} from "../slices/CocktailsSlice";
import { showNotification } from "../slices/UiSlice";
import { ERROR_STATUS } from "../../utils/constants";
export const getDrinks = () => {
  return async (dispatch) => {
    try {
      const res = await getCocktailsRequest();
      dispatch(replaceDrinks(res));
    } catch (e) {
      dispatch(
        showNotification({
          status: ERROR_STATUS,
          message: "Some thing wrong, Try again later!",
        })
      );
      console.log(e);
    }
  };
};

export const getIngredients = () => {
  return async (dispatch) => {
    try {
      const res = await getIngredientsRequest();
      dispatch(replaceIngredients(res));
    } catch (e) {
      dispatch(
        showNotification({
          status: ERROR_STATUS,
          message: "Some thing wrong, Try again later!",
        })
      );
      console.log(e);
    }
  };
};

export const getCategories = () => {
  return async (dispatch) => {
    try {
      const res = await getCategoriesRequest();
      dispatch(replaceCategories(res));
    } catch (e) {
      dispatch(
        showNotification({
          status: ERROR_STATUS,
          message: "Some thing wrong, Try again later!",
        })
      );
      console.log(e);
    }
  };
};

export const getGlasses = () => {
  return async (dispatch) => {
    try {
      const res = await getGlassesRequest();
      dispatch(replaceGlasses(res));
    } catch (e) {
      dispatch(
        showNotification({
          status: ERROR_STATUS,
          message: "Some thing wrong, Try again later!",
        })
      );
      console.log(e);
    }
  };
};

export const getAlcoholicTypes = () => {
  return async (dispatch) => {
    try {
      const res = await getAlcoholicTypesRequest();
      dispatch(replaceGlasses(res));
    } catch (e) {
      dispatch(
        showNotification({
          status: ERROR_STATUS,
          message: "Some thing wrong, Try again later!",
        })
      );
      console.log(e);
    }
  };
};
