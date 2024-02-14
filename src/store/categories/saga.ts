import { collection, onSnapshot } from "firebase/firestore";
import { eventChannel } from "redux-saga";
import { takeLatest, put, all, call, take } from "typed-redux-saga/macro";
import {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchItemsStart,
  fetchItemsSuccess,
} from "./reducer";
import { CategoryData, ItemData } from "../../types";
import { db } from "../../firebase";

export type ItemsChannelData = {
  data: ItemData[];
};

export type CategoriesChannelData = {
  data: CategoryData[];
};

export function* observeItems() {
  const itemsCollection = collection(db, "items");
  const itemsChannel = eventChannel<ItemsChannelData>((emit) => {
    const unsubscribe = onSnapshot(itemsCollection, (snapshot) => {
      const data = snapshot.docs.map(
        (doc) => ({ id: doc.id, ...doc.data() } as ItemData)
      );
      emit({ data: data.length > 0 ? data : [] });
    });
    return unsubscribe;
  });
  while (true) {
    const ItemsChannelData = yield* take(itemsChannel);
    const items = ItemsChannelData.data.map((item) => ({
      ...item,
      id: item.id,
    }));
    yield* put(fetchItemsSuccess(items));
  }
}

export function* observeCategories() {
  const categoriesCollection = collection(db, "categories");
  const categoriesChannel = eventChannel<CategoriesChannelData>((emit) => {
    const unsubscribe = onSnapshot(categoriesCollection, (snapshot) => {
      const data = snapshot.docs.map(
        (doc) => ({ id: doc.id, ...doc.data() } as CategoryData)
      );
      emit({ data: data.length > 0 ? data : [] });
    });
    return unsubscribe;
  });
  while (true) {
    const CategoriesChannelData = yield* take(categoriesChannel);
    const categories = CategoriesChannelData.data.map((categories) => ({
      ...categories,
      id: categories.id,
    }));
    yield* put(fetchCategoriesSuccess(categories));
  }
}

export function* onObserveCategory() {
  yield takeLatest(fetchCategoriesStart.type, observeCategories);
}

export function* onObserveItems() {
  yield takeLatest(fetchItemsStart.type, observeItems);
}

export function* categoriesSaga() {
  yield all([call(observeCategories), call(observeItems)]);
}
