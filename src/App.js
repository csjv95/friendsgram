import React, { useEffect } from "react";
import RouteLogin from "./routes/routeLogin/routeLogin";
import authCheckUser from "./service/auth/authCheckUser";
import ContainerRouteMain from "./containers/ContainerRouteMain";
import { useDispatch, useSelector } from "react-redux";
import { loginState } from "./redux/modules/isLogin";

function App() {
  const dispatch = useDispatch();

  const { isLogin } = useSelector((state) => state.isLogin);

  useEffect(() => {
    const chageLogin = () => dispatch(loginState());
    authCheckUser(chageLogin);
  }, [dispatch]);

  return <>{isLogin ? <ContainerRouteMain /> : <RouteLogin />}</>;
}

export default App;
