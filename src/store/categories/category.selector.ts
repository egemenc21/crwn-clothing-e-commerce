import {createSelector} from "reselect"; // if nothing has changed do not even get bothered to rerun library!
//if any state change in root reducer all selectors get fired again
import { CategoryMap } from "./category.types";
import { CategoriesState } from "./category.reducer";
import { RootState } from "../store";
const selectCategoryReducer = (state: RootState):CategoriesState => state.category;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories):CategoryMap =>
    categories.reduce((acc, category) => {
      const {title, items} = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap)
);
export const selectIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
)
