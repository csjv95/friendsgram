import React from "react";
import { Route, Switch } from "react-router-dom";

const MyProfileRouter = ({match}) => {
  return (
    <Switch>
      {console.log(match)}
      <Route exact path="/:name" />
      <Route path="/:name/chanel" />
      <Route path="/:name/saved" />
      <Route path="/:name/teged" />
    </Switch>
  );
};

export default MyProfileRouter;
