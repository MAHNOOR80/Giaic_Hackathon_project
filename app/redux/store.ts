"use client";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/cartslice";
import wishlistReducer from "../redux/wishlistslice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        wishlist: wishlistReducer, // Add wishlist reducer here
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
