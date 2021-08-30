import React, { useEffect } from "react";
import { useState } from "react";
import RouteMain from "./routes/routeMain/routeMain";
import RouteLogin from "./routes/routeLogin/routeLogin";
import authCheckUser from "./service/auth/authCheckUser";

function App() {
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    authCheckUser(setLogin);
  }, [setLogin]);

  return (
    <>
      {isLogin ? (
        <RouteMain isLogin={isLogin} setLogin={setLogin} />
      ) : (
        <RouteLogin isLogin={isLogin} setLogin={setLogin} />
      )}
    </>
  );
}

export default App;
