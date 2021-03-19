import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import FacebookLogin from "./componet/FacebookLogin";
import Login from "./componet/Login/Login";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/facebook" component={FacebookLogin} />
      </Switch>
    </>
  );
}

export default App;
