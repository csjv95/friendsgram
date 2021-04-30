import React from "react";
import { Route, Switch } from "react-router";
import Direct from "../../componet/Direct/Direct";
import Home from "../../componet/Home/Home";
import Post from "../../componet/Post/Post";
import Suggest from "../../componet/Suggest/Suggest";

const NavRouter = ({ userData, postData, usersList, followingList }) => {
  return (
    <Switch>
      <Route exact path="/">
        <Home userData={userData} postData={postData} usersList={usersList} followingList={followingList}/>
      </Route>
      <Route path="/direct" component={Direct} />
      <Route path="/post" component={Post} />
      <Route path="/suggest">
        <Suggest usersList={usersList} followingList={followingList}/>
      </Route>
      <Route render={() => <div>페이지를 찾을 수 없습니다.</div>} />
    </Switch>
  );
};

export default NavRouter;
