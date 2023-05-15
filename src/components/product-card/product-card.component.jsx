import {ProductCardContainer,Footer,ProductName,ProductPrice} from "./product-card.styles";

import Button,{BUTTON_TYPE_CLASSES}  from "../button/button.component";
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.contexts";

const ProductCard = ({product}) => {
  const {addItemToCart} = useContext(CartContext);
  const {name, price, imageUrl} = product;
  const addProductToCart = () => {
    addItemToCart(product);
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
