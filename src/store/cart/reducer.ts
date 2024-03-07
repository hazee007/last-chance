import { createSlice } from "@reduxjs/toolkit";

import { CartItem } from "../../types";

import { addItemToCart, removeItemFromCart } from "./utils";

export type CartState = {
  readonly cartItems: CartItem[] | [];
  readonly recentlyViewed: string[] | [];
};

const INITIAL_STATE: CartState = {
  cartItems: [],
  recentlyViewed: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addItem: (state, action) => {
      state.cartItems = addItemToCart(state.cartItems, action.payload);
    },
    removeItem: (state, action) => {
      state.cartItems = removeItemFromCart(state.cartItems, action.payload);
    },
    clearItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
    },
    addRecentlyViewed: (state, action) => {
      state.recentlyViewed = [...state.recentlyViewed, action.payload];
    },
    clearRecentlyViewed: (state) => {
      state.recentlyViewed = [];
    },
  },
});

export const { addItem, removeItem, clearItemFromCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
