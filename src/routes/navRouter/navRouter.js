import React from "react";
import { Route, Switch } from "react-router";
import Direct from "../../componet/Direct/Direct";
import Edit from "../../componet/Edit/Edit";
import Home from "../../componet/Home/Home";
import MyProfile from "../../componet/MyProfile/MyProfile";
import Post from "../../componet/Post/Post";
import Suggest from "../../componet/Suggest/Suggest";

const NavRouter = ({ userData, usersList, followingList, followerList }) => {
  return (
    <Switch>
      <Route exact path="/">
        <Home
          userData={userData}
          usersList={usersList}
          followingList={followingList}
        />
      </Route>
      <Route path="/direct" component={Direct} />
      <Route path="/post" component={Post} />
      <Route path="/suggest">
        <Suggest usersList={usersList} followingList={followingList} />
      </Route>
      <Route path="/edit">
        <Edit userData={userData} />
      </Route>
      <Route path="/:username">
        <MyProfile followingList={followingList} followerList={followerList} />
      </Route>
      <Route render={() => <div>페이지를 찾을 수 없습니다.</div>} />
    </Switch>
  );
};

export default NavRouter;
