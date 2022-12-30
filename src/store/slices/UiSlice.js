import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { ERROR_STATUS, SUCCESS_STATUS } from "../../utils/constants";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    loading: false,
    modalIsOpen: false,
    notification: null,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setModalIsOpen: (state, action) => {
      state.modalIsOpen = action.payload;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        message: action.payload.message,
      };
      if (action.payload.status === ERROR_STATUS) {
        toast.error(action.payload.message);
      }
      if (action.payload.status === SUCCESS_STATUS) {
        toast.success(action.payload.message);
      }
    },
  },
});

export const { setLoading, setModalIsOpen, showNotification } = uiSlice.actions;
export default uiSlice.reducer;
