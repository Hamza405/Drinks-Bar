import { getCocktailsRequest } from "../../api/CocktailsApi";
import { replaceDrinks } from "../slices/CocktailsSlice";
export const getDrinks = () => {
  return async (dispatch) => {
    try {
      const res = await getCocktailsRequest();
      dispatch(replaceDrinks(res));
    } catch (e) {
      console.log(e);
    }
  };
};
