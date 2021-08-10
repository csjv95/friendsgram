import React from 'react'
import { Route, Switch } from 'react-router'
import EmptyChat from '../../componet/Direct/Chat/EmptyChat'
import UserChat from '../../componet/Direct/Chat/UserChat'

const DirectRouter = ({
  users,
  handleSend,
  clickedRoomId,
  currentUserUid,
  view,
}) => {
  return (
    <Switch>
      <Route exact path="/direct">
        <EmptyChat handleSend={handleSend} />
      </Route>
      <Route path="/direct/:rommId">
        <UserChat
          clickedRoomId={clickedRoomId}
          currentUserUid={currentUserUid}
          view={view}
        />
      </Route>
      <Route render={() => <div>페이지를 찾을 수 없습니다.</div>} />
    </Switch>
  )
}

export default DirectRouter
