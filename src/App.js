import React from "react";
import { useState } from "react";
import "./App.css";
import RouteMain from "./routes/routeMain/routeMain";
import RouteLogin from "./routes/routeLogin/routeLogin";

function App() {
  const [isLogin, setLogin] = useState(false);
  console.log(isLogin);
  return <>{isLogin === true ? <RouteMain setLogin={setLogin}/> : <RouteLogin setLogin={setLogin}/>}</>;
}

export default App;
