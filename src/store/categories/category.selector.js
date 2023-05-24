import {createSelector} from "reselect"; // if nothing has changed do not even get bothered to rerun library!
//if any state change in root reducer all selectors get fired again

const selectCategoryReducer = (state) => state.category;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const {title, items} = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
export const selectIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
)
