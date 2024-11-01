import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "mart",
  initialState: {
    data: [],
    quantity: 0,
    text: "",
  },
  reducers: {
    addToCart: (state, action) => {
      console.log("received", action.payload);
      const existingItem = state.data.find(
        (item) => item.id === action.payload.item.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.data.push({ ...action.payload.item, quantity: 1 });
      }

      state.quantity += 1;
    },
    removeFromCart: (state, action) => {
      const existingItem = state.data.find(
        (item) => item.id === action.payload.item.id
    );

    if (existingItem) {
        // Decrease the quantity
        existingItem.quantity -= 1;

        // If the quantity is zero after decrement, remove the item
        if (existingItem.quantity === 0) {
            state.data = state.data.filter((item) => item.id !== existingItem.id);
        }

        state.quantity = Math.max(0, state.quantity - 1);
    
      }

    },
    cartReset: (state) => {
      state.data = [];
      state.quantity = 0;
    },
  },
});

export const { addToCart, removeFromCart, cartReset } = cartSlice.actions;

export default cartSlice.reducer;
