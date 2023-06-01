import {createSelector} from "reselect";
import { CartState } from "./cart.reducer";

import { RootState } from "../store";

const selectCartReducer = (state:RootState):CartState => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectTheStateOfCart = createSelector(
  [selectCartReducer],
  (cart) => cart.stateOfCart
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const selectPriceTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.quantity,
    0
  )
);