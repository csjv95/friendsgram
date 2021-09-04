import React from "react";
import { Route, Switch } from "react-router";
import Direct from "../../componet/Direct/Direct";
import Edit from "../../componet/Edit/Edit";
import Home from "../../componet/Home/Home";
import MyProfile from "../../componet/MyProfile/MyProfile";
import Upload from "../../componet/Upload/Upload";
import Suggest from "../../componet/Suggest/Suggest";
import EmptyPage from "../../Global/EmptyPage/EmptyPage";
import { Theme } from "../../style/Theme";

const NavRouter = ({
  userData,
  usersList,
  followingList,
  followerList,
  currentUserUid,
  handlePostMenu,
  handleFollow,
  handleSend,
  bookMarkPostIds,
  setClickedPostId,
  setClickedPostUid,
  setIsFollow,
}) => {
  return (
    <Switch>
      <Route exact path="/">
        <Home
          userData={userData}
          usersList={usersList}
          followingList={followingList}
          currentUserUid={currentUserUid}
          handlePostMenu={handlePostMenu}
          setClickedPostId={setClickedPostId}
          setClickedPostUid={setClickedPostUid}
          handleSend={handleSend}
        />
      </Route>

      <Route path="/direct">
        <Direct
          currentUserUid={currentUserUid}
          userData={userData}
          handleSend={handleSend}
        />
      </Route>
      <Route path="/post" component={Upload} />
      <Route path="/suggest">
        <Suggest
          usersList={usersList}
          followingList={followingList}
          followerList={followerList}
          StSectionPaddingTop="4em"
          StSectionBackgroundColor={Theme.colors.backgroundColor}
          StlistWidth="38em"
          StListPadding="1em"
        />
      </Route>
      <Route path="/edit">
        <Edit userData={userData} />
      </Route>

      <Route path="/:username">
        <MyProfile
          followingList={followingList}
          followerList={followerList}
          currentUserUid={currentUserUid}
          bookMarkPostIds={bookMarkPostIds}
          handlePostMenu={handlePostMenu}
          handleFollow={handleFollow}
          setClickedPostId={setClickedPostId}
          setClickedPostUid={setClickedPostUid}
          setIsFollow={setIsFollow}
          handleSend={handleSend}
        />
      </Route>
      <Route render={() => <EmptyPage />} />
    </Switch>
  );
};

export default NavRouter;
