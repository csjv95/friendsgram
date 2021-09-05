import React, { useEffect } from "react";
import RouteMain from "./routes/routeMain/routeMain";
import RouteLogin from "./routes/routeLogin/routeLogin";
import authCheckUser from "./service/auth/authCheckUser";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./redux/modules/isLogin";

function App() {
  const dispatch = useDispatch();

  const { isLogin } = useSelector((state) => ({
    isLogin: state.loginState.isLogin,
  }));

  useEffect(() => {
    const changeLoginState = () => dispatch(login());
    authCheckUser(changeLoginState);
  }, [dispatch]);

  console.log(isLogin);

  return <>{isLogin ? <RouteMain /> : <RouteLogin />}</>;
}

export default App;
