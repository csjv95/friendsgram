import { combineReducers } from "redux";
import modalState from "./modalState";
import isLogin from "./isLogin";

const rootReducer = combineReducers({
  //리듀서들
  modalState,
  isLogin,
});

export default rootReducer;
