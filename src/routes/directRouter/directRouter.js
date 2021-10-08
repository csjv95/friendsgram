import React from "react";
import { Route, Switch } from "react-router";
import EmptyChat from "../../componet/Direct/Chat/EmptyChat";
import UserChat from "../../componet/Direct/Chat/UserChat";
import DirectFriend from "../../responsiveComponents/Direct/DirectFriend";

const DirectRouter = ({
  changeSendModal,
  currentUserUid,
  responsive,
  userData,
}) => {
  return (
    <Switch>
      {responsive ? (
        <Route exact path="/direct">
          <DirectFriend userData={userData} changeSendModal={changeSendModal} />
        </Route>
      ) : (
        <Route exact path="/direct">
          <EmptyChat changeSendModal={changeSendModal} />
        </Route>
      )}

      <Route path="/direct/:rommId">
        <UserChat currentUserUid={currentUserUid} />
      </Route>
      <Route render={() => <div>페이지를 찾을 수 없습니다.</div>} />
    </Switch>
  );
};

export default DirectRouter;
