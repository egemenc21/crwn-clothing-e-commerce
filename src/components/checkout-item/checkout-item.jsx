import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Value,
  Arrow,
  Button,
} from "./checkout-item.styles";
import {
  addItemToCart,
  deleteItemFromCart,
  clearItem,
} from "../../store/cart/cart.action";
import {useDispatch, useSelector} from "react-redux";
import {selectCartItems} from "../../store/cart/cart.selector";

const CheckoutItem = ({cartItem}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const {name, quantity, price, imageUrl} = cartItem;

  const clearItemHandler = () => {
    dispatch(clearItem(cartItems, cartItem));
  };
  const deleteItemHandler = () => {
    dispatch(deleteItemFromCart(cartItems, cartItem));
  };
  const addItemHandler = () => {
    dispatch(addItemToCart(cartItems, cartItem));
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>

      <Quantity>
        <Arrow onClick={deleteItemHandler}> &#10094; </Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}> &#10095; </Arrow>
      </Quantity>

      <BaseSpan>{price}</BaseSpan>
      <Button onClick={clearItemHandler}>&#10005;</Button>
    </CheckoutItemContainer>
  );
};
export default CheckoutItem;
