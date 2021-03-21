import React from "react";
import { Route, Switch } from "react-router";
import FacebookLogin from "../../componet/FacebookLogin";
import SignUp from "../../componet/SignUp/SignUp";
import Login from "../../componet/Login/Login"

const RouteLogin = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/facebook" component={FacebookLogin} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  );
};

export default RouteLogin;
