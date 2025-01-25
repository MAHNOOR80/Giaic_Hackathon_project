"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  _id: string; // Unique identifier for each item
  image: string;
  name: string;
  price: number;
  quantity: number; // Tracks the quantity of the item
}

const cartSlice = createSlice({
  name: "Cart",
  initialState: [] as CartItem[],
  reducers: {
    add(state, action: PayloadAction<CartItem>) {
      const existingItem = state.find((item) => item._id === action.payload._id);
      if (existingItem) {
         // If the item already exists, increase the quantity
         existingItem.quantity +=  1;
      } else {
         // If the item is new, add it to the cart with a default quantity of 1
         state.push({ ...action.payload, quantity:  1 });
      }
   },
    remove(state, action: PayloadAction<string>) {
      return state.filter((item) => item._id !== action.payload);
    },
    updateQuantity(
      state,
      action: PayloadAction<{ _id: string; quantity: number }>
    ) {
      const { _id, quantity } = action.payload;
      const item = state.find((item) => item._id === _id);
      if (item) {
        item.quantity = quantity; // Update the item's quantity
      }
    },
    clearCart() {
      return []; // Reset the cart to an empty array
    },
  },
});

export const { add, remove, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
