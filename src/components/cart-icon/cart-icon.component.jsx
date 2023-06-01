import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from "./cart-icon.styles.jsx";
import {useSelector, useDispatch} from "react-redux";
import {setTheStateOfCart} from "../../store/cart/cart.action";
import {
  selectTheStateOfCart,
  selectCartCount,
} from "../../store/cart/cart.selector";

const CartIcon = () => {
  const stateOfCart = useSelector(selectTheStateOfCart);
  const cartCount = useSelector(selectCartCount);
  const dispatch = useDispatch();

  const changeTheStateOfCart = () => dispatch(setTheStateOfCart(!stateOfCart));
  return (
    <CartIconContainer onClick={changeTheStateOfCart}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};
export default CartIcon;
