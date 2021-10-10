import React, { useState } from "react";
import { StImageMultiple } from "../../Global/StIcon/StIcon";
import ModalPotal from "../../modal/ModalPotal";
import Post from "../Post/Post";
import {
  StPostList,
  StPostItem,
  StPostButton,
  StPostImg,
} from "../../Global/StMyProfileRoute/StMyProfileRoute";
import { useMediaQuery } from "react-responsive";
import { useHistory } from "react-router";
import { clickedPostId } from "../../redux/modules/post/clickPost";
import { useDispatch } from "react-redux";

const MyPost = ({
  myPostData,
  currentUserUid,
  handlePost,
  postModal,
  post,
  handlePostMenu,
  setClickedPostId,
  setClickedPostUid,
  handleSend,
}) => {
  const [postId, setPostId] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const responsive = useMediaQuery({
    query: "(max-width:1024px)",
  });

  return (
    <StPostList>
      {myPostData.map((data, postId) => (
        <StPostItem
          key={postId}
          onClick={async () => {
            handlePost();
            setPostId(postId);
            dispatch(clickedPostId(data.postId));
            responsive &&
              history.push({
                pathname: `/post/${data.postId}`,
              });
          }}
        >
          <StPostButton>
            <StPostImg src={data.imgsData[0].imgUrl} alt="my post" />
          </StPostButton>
          {data.imgsData.length > 1 && (
            <StImageMultiple
              width="1.4"
              color="white"
              position="absolute"
              top="14"
              right="14"
            />
          )}
        </StPostItem>
      ))}
      {postModal && (
        <ModalPotal potalName={post}>
          <Post
            content={myPostData}
            postId={postId}
            currentUserUid={currentUserUid}
            setClickedPostId={setClickedPostId}
            setClickedPostUid={setClickedPostUid}
            handlePost={handlePost}
            handlePostMenu={handlePostMenu}
            handleSend={handleSend}
          />
        </ModalPotal>
      )}
    </StPostList>
  );
};

export default MyPost;
