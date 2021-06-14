import React from "react";
import { Route, Switch } from "react-router";
import Direct from "../../componet/Direct/Direct";
import Edit from "../../componet/Edit/Edit";
import Home from "../../componet/Home/Home";
import MyProfile from "../../componet/MyProfile/MyProfile";
import Upload from "../../componet/Upload/Upload";
import Suggest from "../../componet/Suggest/Suggest";
import EmptyPage from "../../Global/EmptyPage/EmptyPage";

const NavRouter = ({ userData, usersList, followingList, followerList,currentUserUid }) => {
  return (
    <Switch>
      <Route exact path="/">
        <Home
          userData={userData}
          usersList={usersList}
          followingList={followingList}
          currentUserUid={currentUserUid}
        />
      </Route>
      <Route path="/direct" component={Direct} />
      <Route path="/post" component={Upload} />
      <Route path="/suggest">
        <Suggest
          usersList={usersList}
          followingList={followingList}
          followerList={followerList}
        />
      </Route>
      <Route path="/edit">
        <Edit userData={userData} />
      </Route>
      <Route path="/:username">
        <MyProfile followingList={followingList} followerList={followerList} />
      </Route>
      <Route render={() => <EmptyPage />} />
    </Switch>
  );
};

export default NavRouter;
