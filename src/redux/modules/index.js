import { combineReducers } from "redux";
import loginState from "./isLogin";
import modalState from "./modalState";
import progressBar from "./progressBar";

const rootReducer = combineReducers({
  loginState,
  modalState,
  progressBar,
});

export default rootReducer;
