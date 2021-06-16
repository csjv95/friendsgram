import React, { useState } from "react";
import styled from "styled-components";
import { StImageMultiple } from "../../Global/StIcon/StIcon";
import ModalPotal from "../../modal/ModalPotal";
import Post from "../Post/Post";
import {
  StPostList,
  StPostItem,
  StPostButton,
  StPostImg,
} from "../../Global/StMyProfileRoute/StMyProfileRoute";

const MyPost = ({ myPostData, currentUserUid }) => {
  const post = document.getElementById("post");
  const [postModal, setPostModal] = useState(false);
  const [postId, setPostId] = useState("");

  const handlePost = () => {
    setPostModal(!postModal);
  };

  return (
    <StPostList>
      {myPostData.map((data) => (
        <StPostItem
          key={data.postId}
          onClick={() => {
            handlePost();
            setPostId(data.postId);
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
            handlePost={handlePost}
            myPostData={myPostData}
            postId={postId}
            currentUserUid={currentUserUid}
          />
        </ModalPotal>
      )}
    </StPostList>
  );
};

export default MyPost;
