import {CartIconContainer,ItemCount,ShoppingIcon} from "./cart-icon.styles.jsx";
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.contexts";

const CartIcon = () => {
  const {stateOfCart, setTheStateOfCart, cartCount} = useContext(CartContext);

  const changeTheStateOfCart = () => setTheStateOfCart(!stateOfCart);
  return (
    <CartIconContainer onClick={changeTheStateOfCart}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};
export default CartIcon;
