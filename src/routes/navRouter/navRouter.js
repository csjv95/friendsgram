import React from "react";
import { Route, Switch } from "react-router";
import Upload from "../../componet/Upload/Upload";
import EmptyPage from "../../Global/EmptyPage/EmptyPage";
import ContainerEdit from "../../containers/ContainerEdit";
import ContainerHome from "../../containers/ContainerHome";
import ContainerDirect from "../../containers/ContainerDirect";
import ContainerSuggest from "../../containers/ContainerSuggest";
import ContainerMyProfile from "../../containers/ContainerMyProfile";

const NavRouter = ({
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
        <ContainerDirect />
      </Route>
      <Route path="/post" component={Upload} />

      {/* start make suggest an spread make  usersList,followingList,followerList*/}

      {/* <Route path="/suggest">
        <Suggest
          usersList={usersList}
          followingList={followingList}
          followerList={followerList}
          StSectionPaddingTop="4em"
          StSectionBackgroundColor={Theme.colors.backgroundColor}
          StlistWidth="38em"
          StListPadding="1em"
        />
      </Route> */}
      <Route path="/suggest" component={ContainerSuggest} />

      <Route path="/edit" component={ContainerEdit} />

      <Route path="/:username">
        {/* <MyProfile
          followingList={followingList}
          followerList={followerList}
          bookMarkPostIds={bookMarkPostIds}
          handlePostMenu={handlePostMenu}
          handleFollow={handleFollow}
          handleSend={handleSend}
          setClickedPostId={setClickedPostId}
          setClickedPostUid={setClickedPostUid}
          setIsFollow={setIsFollow}
        /> */}
        <ContainerMyProfile />
      </Route>
      <Route render={() => <EmptyPage />} />
    </Switch>
  );
};

export default NavRouter;
