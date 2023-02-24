import { GET_FAQS_FAIL, GET_FAQS_SUCCESS } from "./actionTypes";

const INIT_STATE = {
  error: false,
  loading: false,
  faqs: [],
};

const Content = (state = INIT_STATE, action) => {
  console.log("reducer eccomerce");
  console.log(action.type);
  switch (action.type) {
    case GET_FAQS_SUCCESS:
      return {
        ...state,
        error: false,
        faqs: action.payload,
      };
    case GET_FAQS_FAIL:
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
};

export default Content;
