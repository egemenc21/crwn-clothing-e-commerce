import {createContext, useState, useEffect} from "react";

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

export const CartContext = createContext({
  stateOfCart: false,
  setTheStateOfCart: () => null,
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  deleteItemFromCart: () => {},
  clearItem: () => {},
  priceTotal:0
});

export const CartProvider = ({children}) => {
  const [stateOfCart, setTheStateOfCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [priceTotal, setPriceTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newPriceTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    )
    setPriceTotal(newPriceTotal);
  }, [cartItems]);
  const clearItem = (itemToDelete) => {
    setCartItems(deleteCartItem(cartItems, itemToDelete));
  };
  const deleteItemFromCart = (itemToDecrease) => {
    setCartItems(decreaseCartItem(cartItems, itemToDecrease));
  };
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = {
    stateOfCart,
    setTheStateOfCart,
    cartItems,
    addItemToCart,
    cartCount,
    deleteItemFromCart,
    clearItem,
    priceTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
