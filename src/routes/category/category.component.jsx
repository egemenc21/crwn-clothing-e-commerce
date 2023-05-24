import {CategoryContainer, Title} from "./category.styles";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {
  selectCategoriesMap,
  selectIsLoading,
} from "../../store/categories/category.selector";
import Spinner from "../../components/spinner/spinner.component";

import ProductCard from "../../components/product-card/product-card.component";

const Category = () => {
  const {category} = useParams(); //hats,jackets... from the route itself
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  //   our products wont change unless category or categoriesMap changes
  return (
    <>
      <Title>{category.toUpperCase()}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </>
  );
};
export default Category;
