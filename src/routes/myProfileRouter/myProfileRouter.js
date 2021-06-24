import React from "react";
import { Route, Switch } from "react-router-dom";
import MyPost from "../../componet/MyPost/MyPost";
import Saved from "../../componet/Saved/Saved";

const MyProfileRouter = ({
  post,
  matchUser,
  myPostData,
  postModal,
  handlePost,
  currentUserUid,
  bookMarkPosts,
  handlePostMenu,
  setClickedPostId,
  setClickedPostUid,
}) => {
  const { displayName } = matchUser;
  return (
    <Switch>
      <Route exact path={`/${displayName}`}>
        <MyPost
          post={post}
          myPostData={myPostData}
          postModal={postModal}
          handlePost={handlePost}
          currentUserUid={currentUserUid}
          handlePostMenu={handlePostMenu}
          setClickedPostId={setClickedPostId}
          setClickedPostUid={setClickedPostUid}
        />
      </Route>
      <Route path={`/${displayName}/chanel`}>
        <div>chanel</div>
      </Route>
      <Route path={`/${displayName}/saved`}>
        <Saved
          post={post}
          postModal={postModal}
          handlePost={handlePost}
          bookMarkPosts={bookMarkPosts}
          handlePostMenu={handlePostMenu}
          setClickedPostId={setClickedPostId}
          setClickedPostUid={setClickedPostUid}
        />
      </Route>
      <Route path={`/${displayName}/tagged`}>
        <div>tagged</div>
      </Route>
    </Switch>
  );
};

export default MyProfileRouter;
