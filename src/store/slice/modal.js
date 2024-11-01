import { createSlice } from "@reduxjs/toolkit";

export const modelSlice = createSlice({
  name: "modal",
  initialState: {
    open: false,
  },
  reducers: {
    openModal: (state, action) => {
      console.log(state, "state");
      state.open = true;
    },
    closeModal: (state, action) => {
      console.log(state, "state");
      state.open = false;
    },
  },
});

export const { openModal , closeModal } = modelSlice.actions;

export default modelSlice.reducer;
