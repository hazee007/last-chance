import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./user/reducer";
import { categoriesReducer } from "./categories/reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  // cart: cartReducer,
  categories: categoriesReducer,
});
