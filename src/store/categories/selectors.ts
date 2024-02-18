import { createSelector } from "reselect";

import { RootState } from "../store";

import { CategoriesState } from "./reducer";

const selectCategoriesReducer = (state: RootState): CategoriesState =>
  state.categories;

export const selectCategories = createSelector(
  [selectCategoriesReducer],
  (categories) => categories.categories
);

export const selectItems = createSelector(
  [selectCategoriesReducer],
  (categories) => categories.items
);

export const selectLoading = createSelector(
  [selectCategoriesReducer],
  (categories) => categories.loading
);

export const selectError = createSelector(
  [selectCategoriesReducer],
  (categories) => categories.error
);

export const selectCategory = (categoryId: string) =>
  createSelector([selectCategories], (categories) =>
    categories.find((category) => category.id === categoryId)
  );

export const selectItem = (itemId: string) =>
  createSelector([selectItems], (items) =>
    items.find((item) => item.id === itemId)
  );
