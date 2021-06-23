import React, { useState} from "react";
import {
  StPostList,
  StPostItem,
  StPostButton,
  StPostImg,
} from "../../Global/StMyProfileRoute/StMyProfileRoute";
import { StImageMultiple } from "../../Global/StIcon/StIcon";
import ModalPotal from "../../modal/ModalPotal";
import Post from "../Post/Post";

const Saved = ({
  handlePost,
  postModal,
  post,
  currentUserUid,
  bookMarkPosts
}) => {
  const [postId, setPostId] = useState([]);


  return (
    <StPostList>
      {bookMarkPosts &&
        bookMarkPosts.map((data, postId) => (
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
            content={bookMarkPosts}
            postId={postId}
            currentUserUid={currentUserUid}
          />
        </ModalPotal>
      )}
    </StPostList>
  );
};

export default Saved;
