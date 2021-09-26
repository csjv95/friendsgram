import { combineReducers } from "redux";
import loginState from "./auth/isLogin";
import modalState from "./modals/modalState";
import progressBar from "./progressBar/progressBar";
import userData from "./user/userData";
import unread from "./message/unreadCount";
import userList from "./user/userList";
import followingList from "./follow/followingList";
import followerList from "./follow/followerList";
import clickPost from "./post/clickPost";
import bookMarkPostIds from "./bookMark/bookMarkPostIds";
import currentUserUid from "./auth/currentUserUid";

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
  bookMarkPostIds,
  currentUserUid,
});

export default rootReducer;
