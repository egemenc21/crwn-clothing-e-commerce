import {createContext, useState} from "react";

export const CartContext = createContext({
  stateOfCart: false,
  setTheStateOfCart: () => null,
});

export const CartProvider = ({children}) => {
  const [stateOfCart, setTheStateOfCart] = useState(false);
  const value = {stateOfCart, setTheStateOfCart};

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
