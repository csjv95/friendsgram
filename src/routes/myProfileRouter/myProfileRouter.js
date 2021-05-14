import React from "react";
import { Route, Switch } from "react-router-dom";

const MyProfileRouter = ({userData}) => {
  const {displayName} = userData
  return (
    <Switch>
      <Route exact path={`/${displayName}`}/>
      <Route path={`/${displayName}/chanel`} >
        <div>chanel</div>
        </Route>
      <Route path={`/${displayName}/saved`}>
      <div>saved</div>
        </Route>
      <Route path={`/${displayName}/tagged`} >
      <div>tagged</div>
        </Route>
    </Switch>
  );
};

export default MyProfileRouter;
