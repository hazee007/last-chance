import { combineReducers } from "@reduxjs/toolkit";

import { cartReducer } from "./cart/reducer";
import { categoriesReducer } from "./categories/reducer";
import { userReducer } from "./user/reducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  categories: categoriesReducer,
});

export default rootReducer;
