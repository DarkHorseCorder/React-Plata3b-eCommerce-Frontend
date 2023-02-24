import { GET_FAQS, GET_FAQS_FAIL, GET_FAQS_SUCCESS } from "./actionTypes";

export const getFaqs = () => ({
  type: GET_FAQS,
});

export const getFaqsSuccess = (faqs) => ({
  type: GET_FAQS_SUCCESS,
  payload: faqs,
});

export const getFaqsFail = (error) => ({
  type: GET_FAQS_FAIL,
  payload: error,
});
