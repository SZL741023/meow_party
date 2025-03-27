import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_TIMER = 3000;
const DEFAULT_COLOR = "#ffbc46";
const initialState = {
  show: false,
  title: "",
  text: "",
  icon: "success",
  timer: DEFAULT_TIMER,
  confirmButtonColor: DEFAULT_COLOR,
};
export const cartMessageSlice = createSlice({
  name: "cartMessageSlice",
  initialState,
  reducers: {
    showAlert: (state, action) => {
      const { title, text, icon, timer, confirmButtonColor } = action.payload;
      state.show = true;
      state.title = title;
      state.text = text;
      state.icon = icon || "success";
      state.timer = timer ?? DEFAULT_TIMER;
      state.confirmButtonColor = confirmButtonColor ?? DEFAULT_COLOR;
    },
  },
});

export const { showAlert } = cartMessageSlice.actions;
export default cartMessageSlice.reducer;
