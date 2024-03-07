import { createSelector } from "reselect";

import { RootState } from "../store";

import { CartState } from "./reducer";

const selectCart = (state: RootState): CartState => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.count,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity +
      cartItem.count * (cartItem.price ? cartItem.price : 0),
    0
  )
);
