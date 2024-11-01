import { createSlice } from "@reduxjs/toolkit";

export const toastSlice = createSlice({
  name: "todos",
  initialState: {
    toast: false,
    color: "",
    text: "",
  },
  reducers: {
    toastSucess: (state, action) => {
      (state.toast = true),
        (state.color = "green"),
        (state.text = action.payload.text);
    },
    toastFail: (state, action) => {
      (state.toast = true), (state.color = "red"), (state.text = "Error");
    },
    toastReset: (state, action) => {
      state.toast = false, 
      state.color = "", 
      state.text = ""
    },
  },
});

export const { toastSucess, toastReset, toastFail } = toastSlice.actions;

export default toastSlice.reducer;
