import {CheckoutContainer,CheckoutHeader,HeaderBlock,Total} from "./checkout.styles";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import { useSelector } from "react-redux";
import { selectCartItems, selectPriceTotal } from "../../store/cart/cart.selector";
import PaymentForm from "../../components/payment-form/payment-form.component";


const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const priceTotal = useSelector(selectPriceTotal);
  
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
      <PaymentForm/>

    </CheckoutContainer>
  );
};

export default Checkout;
