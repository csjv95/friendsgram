import React from 'react';
import { Route, Switch } from 'react-router';
import EmptyChat from '../../componet/Direct/Chat/EmptyChat';
import UserChat from '../../componet/Direct/Chat/UserChat';

const DirectRouter = ({users}) => {
  return (
    <Switch>
      <Route exact path="/direct" component={EmptyChat}/>
      <Route path="/direct/:username" component={UserChat} />
    </Switch>
  );
};

export default DirectRouter;