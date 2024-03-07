import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

import { cartReducer } from "./cart/reducer";
import { categoriesReducer } from "./categories/reducer";
import { userReducer } from "./user/reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  categories: categoriesReducer,
});

export default persistReducer(persistConfig, rootReducer);
