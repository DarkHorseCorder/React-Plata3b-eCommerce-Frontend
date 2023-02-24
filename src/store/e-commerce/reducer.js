import {
  GET_CATEGORIES_FAIL,
  GET_CATEGORIES_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_SUCCESS
} from "./actionTypes";

const INIT_STATE = {
  error: "",
  loading: false,
  categories: [],
  category: {},
  products: [],
  product: {},
  status: null,
}

const Ecommerce = (state = INIT_STATE, action) => {
  console.log("reducer eccomerce");
  console.log(action.type);
  switch (action.type) {
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };
    case GET_CATEGORIES_FAIL:
      return {
        ...state,
        categories: action.payload,
      };

    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
      };

    case GET_PRODUCTS_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload,
      };

    case GET_PRODUCT_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default Ecommerce;
