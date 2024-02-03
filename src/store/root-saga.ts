import { all, call } from "typed-redux-saga/macro";
// import { categoriesSaga } from './category/saga';
import { userSagas } from "./user/saga";
// import { cartSagas } from "./cart/cart-sagas";

export default function* rootSaga() {
  yield all([call(userSagas)]);
}
