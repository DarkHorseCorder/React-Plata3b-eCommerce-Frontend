import { all, fork } from "redux-saga/effects";

//public

import AuthSaga from "./auth/login/saga";

import ecommerceSaga from "./e-commerce/saga";
import contentSaga from "./content/saga";

export default function* rootSaga() {
  yield all([fork(AuthSaga), fork(ecommerceSaga), fork(contentSaga)]);
}
