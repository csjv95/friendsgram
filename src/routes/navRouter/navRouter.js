import React from "react";
import { Route, Switch } from "react-router";
import Direct from "../../componet/Direct/Direct";
import MyProfile from "../../componet/MyProfile/MyProfile";
import Upload from "../../componet/Upload/Upload";
import Suggest from "../../componet/Suggest/Suggest";
import EmptyPage from "../../Global/EmptyPage/EmptyPage";
import { Theme } from "../../style/Theme";
import ContainerEdit from "../../containers/ContainerEdit";
import ContainerHome from "../../containers/ContainerHome";
import ContainerDirect from "../../containers/ContainerDirect";

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
        {/* <Home
          userData={userData}
          usersList={usersList}
          followingList={followingList}
          currentUserUid={currentUserUid}
          handlePostMenu={handlePostMenu}
          setClickedPostId={setClickedPostId}
          setClickedPostUid={setClickedPostUid}
          handleSend={handleSend}
        /> */}
        <ContainerHome />
      </Route>

      <Route path="/direct">
        {/* <Direct
          currentUserUid={currentUserUid}
          userData={userData}
          handleSend={handleSend}
        /> */}
        <ContainerDirect currentUserUid={currentUserUid} />
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
      <Route path="/edit" component={ContainerEdit} />

      <Route path="/:username">
        <MyProfile
          followingList={followingList}
          followerList={followerList}
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
