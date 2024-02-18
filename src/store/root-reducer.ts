import { combineReducers } from "@reduxjs/toolkit";

import { categoriesReducer } from "./categories/reducer";
import { userReducer } from "./user/reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  // cart: cartReducer,
  categories: categoriesReducer,
});
