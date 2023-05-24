import {CART_ACTION_TYPES} from "./cart.types";

const INITIAL_STATE = {
  stateOfCart: false,
  cartItems: [],
};

export const cartReducer = (state = INITIAL_STATE, action = {}) => {
  const {type, payload} = action;
  switch (type) {
    case CART_ACTION_TYPES.SET_STATE_OF_CART:
      return {
        ...state,
        stateOfCart: payload,
      };
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    default:
      return state;
  }
};
