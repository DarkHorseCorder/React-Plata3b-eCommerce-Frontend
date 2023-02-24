import { combineReducers } from "redux";

// Authentication
import Login from "./auth/login/reducer";

//E-commerce
import ecommerce from "./e-commerce/reducer";

//Content
import content from "./content/reducer";

const rootReducer = combineReducers({
  Login,
  ecommerce,
  content,
});

export default rootReducer;
