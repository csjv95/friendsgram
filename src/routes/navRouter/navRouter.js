import React from "react";
import { Route, Switch } from "react-router";
import Direct from "../../componet/Direct/Direct";
import Home from "../../componet/Home/Home";
import UpLoad from "../../componet/Upload/UpLoad";
import Post from "../../componet/Post/Post";

const NavRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/direct" component={Direct}/>
      <Route path="/upload" >
        <UpLoad/>
      </Route>
      <Route path="/post" component={Post} />
      <Route render={() => <div>페이지를 찾을 수 없습니다.</div>} />
    </Switch>
  );
};

export default NavRouter;
