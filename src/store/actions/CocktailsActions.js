import { getCocktailsRequest } from "../../api/CocktailsApi";
import { replaceDrinks } from "../slices/CocktailsSlice";
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
