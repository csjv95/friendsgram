import { combineReducers } from "redux";
import loginState from "./isLogin";
import modalState from "./modalState";

const rootReducer = combineReducers({
  loginState,
  modalState,
});

export default rootReducer;
