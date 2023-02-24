import { call, put, takeEvery } from "redux-saga/effects";

// Ecommerce Redux States
import { GET_PRODUCTS, GET_CATEGORIES, GET_PRODUCT } from "./actionTypes";
import {
  getCategoriesFail,
  getCategoriesSuccess,
  getProductsFail,
  getProductsSuccess,
  getProductFail,
  getProductSuccess,
} from "./actions";

import { getCategories, getProducts , getProduct  } from "../../utils/fakebackend_helper";

function* fetchCategories() {
  try {
    const response = yield call(getCategories);
    yield put(getCategoriesSuccess(response));
  } catch (error) {
    yield put(getCategoriesFail(error));
  }
}

function* fetchProducts() {
  try {
    console.log("fetch get products dsere");
    const response = yield call(getProducts);
    yield put(getProductsSuccess(response));
  } catch (error) {
    yield put(getProductsFail(error));
  }
}

function* fetchProduct({ payload: { product, history } }) {
  try {
    console.log("fetch get product ");
    console.log(product);
    const response = yield call(getProduct, product);
    yield put(getProductSuccess(response));
  } catch (error) {
    console.log('error fetch product')
    console.log(error)
    yield put(getProductFail(error));
  }
}

function* ecommerceSaga() {
  yield takeEvery(GET_CATEGORIES, fetchCategories);
  yield takeEvery(GET_PRODUCTS, fetchProducts);
  yield takeEvery(GET_PRODUCT, fetchProduct);
}

export default ecommerceSaga;
