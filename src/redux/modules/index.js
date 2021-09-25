import { combineReducers } from "redux";
import loginState from "./isLogin";
import modalState from "./modalState";
import progressBar from "./progressBar";
import userData from "./userData";
import unread from "./unreadCount";
import userList from "./userList";
import followingList from "./followingList";
import followerList from "./followerList";
import clickPost from "./clickPost";

const rootReducer = combineReducers({
  loginState,
  modalState,
  progressBar,
  userData,
  unread,
  userList,
  followingList,
  followerList,
  clickPost,
});

export default rootReducer;
