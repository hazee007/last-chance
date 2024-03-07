import { CartItem } from "../../types";

export const addItemToCart = (cartItems: CartItem[], itemToAdd: CartItem) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === itemToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, count: cartItem.count + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...itemToAdd, count: itemToAdd?.count ?? 1 }];
};

export const removeItemFromCart = (
  cartItems: CartItem[],
  cartItemToRemove: CartItem
) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem?.count === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, count: cartItem.count - 1 }
      : cartItem
  );
};
