import React, { useEffect } from "react";
import RouteLogin from "./routes/routeLogin/routeLogin";
import authCheckUser from "./service/auth/authCheckUser";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./redux/modules/auth/isLogin";
import ContainerRouteMain from "./containers/ContainerRouteMain";

function App() {
  const dispatch = useDispatch();

  const { isLogin, loading } = useSelector((state) => ({
    isLogin: state.loginState.isLogin,
    loading: state.loginState.loading,
  }));

  useEffect(() => {
    const changeLoginState = () => dispatch(login());

    authCheckUser(changeLoginState);
  }, [dispatch]);

  return <>{isLogin ? <ContainerRouteMain /> : <RouteLogin />}</>;
}

export default App;
