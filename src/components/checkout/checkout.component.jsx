import "./checkout.styles.scss";
import CheckoutItem from "../checkout-item/checkout-item";
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.contexts";

const Checkout = () => {
  const {cartItems,priceTotal} = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Removed</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>
      ))}
      <span className="total">
        Total:$
        {priceTotal}
      </span>
    </div>
  );
};

export default Checkout;
