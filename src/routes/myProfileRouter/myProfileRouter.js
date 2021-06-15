import React from "react";
import { Route, Switch } from "react-router-dom";
import MyPost from "../../componet/MyPost/MyPost";
import Saved from "../../componet/Saved/Saved";

const MyProfileRouter = ({
  matchUser,
  myPostData,
  handlePost,
  currentUserUid,
}) => {
  const { displayName } = matchUser;

  return (
    <Switch>
      <Route exact path={`/${displayName}`}>
        <MyPost
          myPostData={myPostData}
          handlePost={handlePost}
          currentUserUid={currentUserUid}
        />
      </Route>
      <Route path={`/${displayName}/chanel`}>
        <div>chanel</div>
      </Route>
      <Route path={`/${displayName}/saved`}>
        <Saved />
      </Route>
      <Route path={`/${displayName}/tagged`}>
        <div>tagged</div>
      </Route>
    </Switch>
  );
};

export default MyProfileRouter;
