import { call, put, takeEvery } from "redux-saga/effects";

// Ecommerce Redux States
import { GET_FAQS, GET_CATEGORIES } from "./actionTypes";
import { getFaqsSuccess, getFaqsFail } from "./actions";

import { getFaqs } from "../../utils/fakebackend_helper";

function* fetchFaqs() {
  try {
    const response = yield call(getFaqs);
    yield put(getFaqsSuccess(response));
  } catch (error) {
    yield put(getFaqsFail(error));
  }
}

function* contentSaga() {
  yield takeEvery(GET_FAQS, fetchFaqs);
}

export default contentSaga;
