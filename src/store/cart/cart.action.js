import {createAction} from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

const addCartItem = (cartItems, productToAdd) => {
  const existedCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existedCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem
    );
  }
  return [...cartItems, {...productToAdd, quantity: 1}];
};
const decreaseCartItem = (cartItems, itemToDecrease) => {
  const existedCartItem = cartItems.find(
    (cartItem) => cartItem.id === itemToDecrease.id
  );

  if (existedCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToDecrease.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === itemToDecrease.id
      ? {...cartItem, quantity: cartItem.quantity - 1}
      : cartItem
  );
};
const deleteCartItem = (cartItems, itemToDelete) => {
  return cartItems.filter((cartItem) => cartItem.id !== itemToDelete.id);
};

export const setTheStateOfCart = (bool) =>
  createAction(CART_ACTION_TYPES.SET_STATE_OF_CART, bool);

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const deleteItemFromCart = (cartItems, itemToDecrease) => {
  const newCartItems = decreaseCartItem(cartItems, itemToDecrease);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItem = (cartItems, itemToDelete) => {
  const newCartItems = deleteCartItem(cartItems, itemToDelete);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
