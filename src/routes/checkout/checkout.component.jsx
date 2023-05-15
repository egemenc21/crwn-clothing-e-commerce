import {CheckoutContainer,CheckoutHeader,HeaderBlock,Total} from "./checkout.styles";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.contexts";

const Checkout = () => {
  const {cartItems,priceTotal} = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Removed</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>
      ))}
      <Total>
        Total:$
        {priceTotal}
      </Total>
    </CheckoutContainer>
  );
};

export default Checkout;
