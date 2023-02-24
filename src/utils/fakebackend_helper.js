import axios from "axios";
import { del, get, post, put } from "./api_helper";
import * as url from "./url_helper";

// Gets the logged in user data from local session
const getLoggedInUser = () => {
  const user = localStorage.getItem("user");
  if (user) return JSON.parse(user);
  return null;
};

//is user is logged in
const isUserAuthenticated = () => {
  return getLoggedInUser() !== null;
};

// Login Method
const postJwtLogin = (data) => post(url.POST_FAKE_JWT_LOGIN, data);

// get Categories
export const getCategories = () => get(url.GET_CATEGORIES);

// get Products
export const getProducts = () => get(url.GET_PRODUCTS);

// get Product
export const getProduct = (data) => get(url.GET_PRODUCT, data);

//CONTENT
// get Faqs
export const getFaqs = () => get(url.GET_FAQS);

export { getLoggedInUser, isUserAuthenticated, postJwtLogin };
