import React from "react";
import { useState } from "react";
import "./App.css";
import RouteMain from "./routes/routeMain/routeMain";
import RouteLogin from "./routes/routeLogin/routeLogin";

function App() {
  const [isLogin, setLogin] = useState(true);

  return <>{isLogin === true ? <RouteMain /> : <RouteLogin />}</>;
}

export default App;
