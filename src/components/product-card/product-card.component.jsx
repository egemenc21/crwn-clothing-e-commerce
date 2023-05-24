import {ProductCardContainer,Footer,ProductName,ProductPrice} from "./product-card.styles";

import Button,{BUTTON_TYPE_CLASSES}  from "../button/button.component";

import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

const ProductCard = ({product}) => {  
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const {name, price, imageUrl} = product;
  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems,product));
  };
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <ProductName>{name}</ProductName>
        <ProductPrice>{price}</ProductPrice>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
        Add to Card
      </Button>
    </ProductCardContainer>
  );
};
export default ProductCard;
