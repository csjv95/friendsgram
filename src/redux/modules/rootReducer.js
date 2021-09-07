import { combineReducers } from "redux";
import isLogin from "./isLogin";
import modalState from "./modalState";
import userData from "./userData";

const rootReducer = combineReducers({
  isLogin,
  modalState,
  userData,
});

export default rootReducer;
