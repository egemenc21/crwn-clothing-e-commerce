import {AnyAction} from "redux";
import {
  createAction,
  withMatcher,
 
  ActionWithPayload,
} from "../../utils/reducer/reducer.utils";
import {CART_ACTION_TYPES, CartItem} from "./cart.types";
import {create} from "domain";
import { CategoryItem } from "../categories/category.types";

const addCartItem = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
): CartItem[] => {
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
const decreaseCartItem = (
  cartItems: CartItem[],
  itemToDecrease: CartItem
): CartItem[] => {
  const existedCartItem = cartItems.find(
    (cartItem) => cartItem.id === itemToDecrease.id
  );

  if (existedCartItem && existedCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToDecrease.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === itemToDecrease.id
      ? {...cartItem, quantity: cartItem.quantity - 1}
      : cartItem
  );
};
const deleteCartItem = (
  cartItems: CartItem[],
  itemToDelete: CartItem
): CartItem[] => {
  return cartItems.filter((cartItem) => cartItem.id !== itemToDelete.id);
};

export type SetTheStateOfCart = ActionWithPayload<
  CART_ACTION_TYPES.SET_STATE_OF_CART,
  boolean
>;

export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItem[]
>;

export const setTheStateOfCart = withMatcher(
  (boolean: boolean): SetTheStateOfCart =>
    createAction(CART_ACTION_TYPES.SET_STATE_OF_CART, boolean)
);

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItems =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

export const addItemToCart = (
  cartItems: CartItem[],
  productToAdd: CartItem
): SetCartItems => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};

export const deleteItemFromCart = (
  cartItems: CartItem[],
  itemToDecrease: CartItem
): SetCartItems => {
  const newCartItems = decreaseCartItem(cartItems, itemToDecrease);
  return setCartItems(newCartItems);
};

export const clearItem = (
  cartItems: CartItem[],
  itemToDelete: CartItem
): SetCartItems => {
  const newCartItems = deleteCartItem(cartItems, itemToDelete);
  return setCartItems(newCartItems);
};
