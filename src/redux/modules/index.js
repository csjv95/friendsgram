import { combineReducers } from "redux";
import loginState from "./isLogin";

const rootReducer = combineReducers({
  loginState,
});

export default rootReducer;
