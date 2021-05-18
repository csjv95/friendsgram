import React from "react";
import { Route, Switch } from "react-router";
import ChangeEdit from "../../componet/Edit/ChangeEdit/ChangeEdit";

const EditRouter = ({ userData }) => {
  return (
    <Switch>
      <Route exact path="/edit">
        <ChangeEdit userData={userData} />
      </Route>
      <Route path="/edit/password/change" />
    </Switch>
  );
};

export default EditRouter;
