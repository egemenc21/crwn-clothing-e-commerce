import "./cart-icon.styles.scss";
import {useContext} from "react";
import {ReactComponent as ShoppingItem} from "../assets/shopping-bag.svg";
import {CartContext} from "../../contexts/cart.contexts";

const CartIcon = () => {
  const {stateOfCart, setTheStateOfCart, cartCount} = useContext(CartContext);

  const changeTheStateOfCart = () => setTheStateOfCart(!stateOfCart);
  return (
    <div className="cart-icon-container" onClick={changeTheStateOfCart}>
      <ShoppingItem className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};
export default CartIcon;
