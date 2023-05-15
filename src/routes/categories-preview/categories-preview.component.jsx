import {useContext, Fragment} from "react";
import {CategoriesContext} from "../../contexts/categories.contexts";
import CategoryPreview from "../../components/category-preview/category-preview.components";

const CategoriesPreview = () => {
  const {categoriesMap} = useContext(CategoriesContext);
  // console.log(Object.keys(categoriesMap)) hats..jackets...
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        // title = hats...
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
