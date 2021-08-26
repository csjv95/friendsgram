import React from "react";
import { Route, Switch } from "react-router";
import FacebookLogin from "../../componet/FacebookLogin";
import SignUp from "../../componet/SignUp/SignUp";
import Login from "../../componet/Login/Login";

const RouteLogin = ({ isLogin, setLogin }) => {
  return (
    <Switch>
      <Route path="/">
        <Login isLogin={isLogin} setLogin={setLogin} />
      </Route>
      <Route path="/signup" component={SignUp} />
      <Route path="/facebook" component={FacebookLogin} />
    </Switch>
  );
};

export default RouteLogin;
