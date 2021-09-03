import React, { useEffect } from "react";
import { useState } from "react";
import RouteLogin from "./routes/routeLogin/routeLogin";
import authCheckUser from "./service/auth/authCheckUser";
import ContainerRouteMain from "./containers/ContainerRouteMain";

function App() {
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    authCheckUser(setLogin);
  }, [setLogin]);

  return (
    <>
      {isLogin ? (
        <ContainerRouteMain />
      ) : (
        <RouteLogin isLogin={isLogin} setLogin={setLogin} />
      )}
    </>
  );
}

export default App;
