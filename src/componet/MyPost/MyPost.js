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

const MyPost = ({ myPostData, currentUserUid,handlePost,postModal,post }) => {
  const [postId, setPostId] = useState("");

  return (
    <StPostList>
      {myPostData.map((data,postId) => (
        <StPostItem
          key={postId}
          onClick={() => {
            handlePost();
            setPostId(postId);
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
