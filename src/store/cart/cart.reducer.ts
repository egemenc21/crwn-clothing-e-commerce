import {CartItem} from "./cart.types";

import {AnyAction} from "redux";

import {setCartItems, setTheStateOfCart} from "./cart.action";

export type CartState = {
  readonly stateOfCart: boolean;
  readonly cartItems: CartItem[];
};

const INITIAL_STATE:CartState = {
  stateOfCart: false,
  cartItems: [],
};

export const cartReducer = (
  state = INITIAL_STATE,
  action: AnyAction
): CartState => {
  if (setTheStateOfCart.match(action)) {
    return {
      ...state,
      stateOfCart: action.payload,
    };
  }

  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }
  return state;
};
