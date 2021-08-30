import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import NavRouter from "../routes/navRouter/navRouter";
import RouteMain from "../routes/routeMain/routeMain";
import Login from "./Login/Login";

const Late = ({ isLogin }) => {
  const hisotry = useHistory();

  useEffect(() => {
    console.log(isLogin);
    !isLogin &&
      hisotry.push({
        pathname: "/login",
      });
  }, [isLogin, hisotry]);

  return <NavRouter />;
};

export default Late;
