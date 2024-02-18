import { createSlice } from "@reduxjs/toolkit";

import { CategoryData, ItemData } from "../../types";

export type CategoriesState = {
  readonly categories: CategoryData[] | [];
  readonly items: ItemData[] | [];
  readonly loading: boolean;
  readonly error: Error | null;
};

const INITIAL_STATE: CategoriesState = {
  categories: [],
  items: [],
  loading: false,
  error: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState: INITIAL_STATE,
  reducers: {
    fetchCategoriesStart: (state) => {
      state.loading = true;
    },
    fetchCategoriesSuccess: (state, action) => {
      state.categories = action.payload;
      state.loading = false;
    },
    fetchCategoriesFailed: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    fetchItemsStart: (state) => {
      state.loading = true;
    },
    fetchItemsSuccess: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },
    fetchItemsFailed: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
  fetchItemsStart,
  fetchItemsSuccess,
  fetchItemsFailed,
} = categorySlice.actions;

export const categoriesReducer = categorySlice.reducer;
