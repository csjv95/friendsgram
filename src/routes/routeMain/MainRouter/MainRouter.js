import React from 'react';
import { Route, Switch } from "react-router";
import UpLoad from '../../../componet/Upload/UpLoad';
const MainRouter = () => {
  return (
    <Switch>
      <Route path="/upload" component={UpLoad} />
      <Route render={() => <div>페이지를 찾을 수 없습니다.</div>} />
    </Switch>
  );
};

export default MainRouter;