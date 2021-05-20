import React from "react";
import { Route, Switch } from "react-router";
import ChangeEdit from "../../componet/Edit/ChangeEdit/ChangeEdit";
import ChangePw from "../../componet/Edit/ChangePw";

const EditRouter = ({ userData }) => {
  return (
    <Switch>
      <Route exact path="/edit">
        <ChangeEdit userData={userData} />
      </Route>
      <Route path="/edit/password/change">
        <ChangePw userData={userData}/>
        </Route>
    </Switch>
  );
};

export default EditRouter;
