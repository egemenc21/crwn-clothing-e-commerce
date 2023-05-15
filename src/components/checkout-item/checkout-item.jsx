import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Value,
  Arrow,
  Button,
} from "./checkout-item.styles";
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.contexts";
const CheckoutItem = ({cartItem}) => {
  const {addItemToCart, deleteItemFromCart, clearItem} =
    useContext(CartContext);

  const {name, quantity, price, imageUrl} = cartItem;

  const clearItemHandler = () => {
    clearItem(cartItem);
  };
  const deleteItemHandler = () => {
    deleteItemFromCart(cartItem);
  };
  const addItemHandler = () => {
    addItemToCart(cartItem);
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>

      <Quantity>
        <Arrow onClick={deleteItemHandler}>
          {" "}
          &#10094;{" "}
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>
          {" "}
          &#10095;{" "}
        </Arrow>
      </Quantity>

      <BaseSpan>{price}</BaseSpan>
      <Button onClick={clearItemHandler}>
        &#10005;
      </Button>
    </CheckoutItemContainer>
  );
};
export default CheckoutItem;
