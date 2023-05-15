import {CartItemContainer, ImageDetails} from "./cart-item.styles.jsx";

const CartItem = ({cartItem}) => {
  const {name, imageUrl, price, quantity} = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ImageDetails>
        <span >{name}</span>
        <span >
          {quantity} x ${price}
        </span>
      </ImageDetails>
    </CartItemContainer>
  );
};
export default CartItem;
