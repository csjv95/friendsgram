import { combineReducers } from "redux";
import loginState from "./isLogin";
import modalState from "./modalState";
import progressBar from "./progressBar";
import userData from "./userData";

const rootReducer = combineReducers({
  loginState,
  modalState,
  progressBar,
  userData,
});

export default rootReducer;
