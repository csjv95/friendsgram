import React from "react";
import { Route, Switch } from "react-router";
import Home from "../../../componet/Home/Home";
import UpLoad from "../../../componet/Upload/UpLoad";
const MainRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/upload" component={UpLoad} />
      <Route render={() => <div>페이지를 찾을 수 없습니다.</div>} />
    </Switch>
  );
};

export default MainRouter;
