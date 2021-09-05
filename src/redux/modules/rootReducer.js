import { combineReducers } from "redux";
import isLogin from "./isLogin";
import modalState from "./modalState";
const rootReducer = combineReducers({
  isLogin,
  modalState,
});

export default rootReducer;
