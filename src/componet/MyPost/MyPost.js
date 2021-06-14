import React, { useState } from "react";
import styled from "styled-components";
import { StImageMultiple } from "../../Global/StIcon/StIcon";
import ModalPotal from "../../modal/ModalPotal";
import Post from "../Post/Post";

const StPostList = styled.ul`
  width: 56.25rem;
  display: flex;
  flex-wrap: wrap;
`;

const StPostItem = styled.li`
  position: relative;
  width: 33%;
  height: 18em;
  padding: 0.5em;
  cursor: pointer;
`;

const StPostImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.1em;
`;

const MyPost = ({ myPostData }) => {
  const post = document.getElementById("post");
  const [postModal, setPostModal] = useState(false);
  const [postId, setPostId] = useState("");
  
  const handlePost = (postId) => {
    setPostModal(!postModal);
  };

  return (
    <StPostList>
      {myPostData.map((data, postId) => (
        <StPostItem
          key={postId}
          onClick={() => {
            handlePost();
            setPostId(postId);
          }}
        >
          <StPostImg src={data.imgsData[0].imgUrl} alt="data" />
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
          <Post handlePost={handlePost} myPostData={myPostData} postId={postId}/>
        </ModalPotal>
      )}
    </StPostList>
  );
};

export default MyPost;
