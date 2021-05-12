import React from "react";
import { Route, Switch } from "react-router";
import Direct from "../../componet/Direct/Direct";
import Home from "../../componet/Home/Home";
import MyProfile from "../../componet/MyProfile/MyProfile";
import Post from "../../componet/Post/Post";
import Suggest from "../../componet/Suggest/Suggest";

const NavRouter = ({ userData, usersList, followingList,followerList }) => {
  return (
    <Switch>
      <Route exact path="/">
        <Home userData={userData} usersList={usersList} followingList={followingList}/>
      </Route>
      <Route path="/direct" component={Direct} />
      <Route path="/post" component={Post} />
      <Route path="/:name"> 
        <MyProfile userData={userData} followingList={followingList} followerList={followerList}/>
      </Route>
      <Route path="/suggest">
        <Suggest usersList={usersList} followingList={followingList}/>
      </Route>
      <Route render={() => <div>페이지를 찾을 수 없습니다.</div>} />
    </Switch>
  );
};

export default NavRouter;
