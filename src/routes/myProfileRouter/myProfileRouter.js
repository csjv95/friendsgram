import React from "react";
import { Route, Switch } from "react-router-dom";
import MyPost from "../../componet/MyPost/MyPost";

const MyProfileRouter = ({matchUser, myPostData}) => {
  const {displayName} = matchUser
  
  return (
    <Switch>
      <Route path={`/${displayName}`}>
        <MyPost myPostData={myPostData}/>
      </Route>
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