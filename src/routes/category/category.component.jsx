import {CategoryContainer, Title} from "./category.styles";
import {useContext, useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {CategoriesContext} from "../../contexts/categories.contexts";
import ProductCard from "../../components/product-card/product-card.component";

const Category = () => {
  const {category} = useParams();
  const {categoriesMap} = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  //   our products wont change unless category or categoriesMap changes
  return (
    <>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        {/* render only products has some value bec when app first mounted it is null */}
      </CategoryContainer>
    </>
  );
};
export default Category;
