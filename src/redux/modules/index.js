import { combineReducers } from "redux";
import loginState from "./isLogin";
import modalState from "./modalState";
import progressBar from "./progressBar";
import userData from "./userData";
import unread from "./unreadCount";

const rootReducer = combineReducers({
  loginState,
  modalState,
  progressBar,
  userData,
  unread,
});

export default rootReducer;