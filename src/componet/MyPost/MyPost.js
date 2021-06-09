import React from "react";
import styled from "styled-components";
import { StImageMultiple } from "../../Global/StIcon/StIcon";

const StPostList = styled.ul`
  width: 56.25rem;
  display: flex;
`;

const StPostItem = styled.li`
  position: relative;
  width: 33%;
  padding: 0.5em;
`;

const StPostImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.1em;
`;

const MyPost = ({myPostData}) => {
  const onPostClick = () => {
    // state 바꿔주기
    console.log('hello');
  }

  return (
    <StPostList>
      {myPostData.map((data, postId) => (
        <StPostItem key={postId} >
          <StPostImg src={data.imgsData[0].imgUrl} alt="data" onClick={onPostClick}/>
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
    </StPostList>
  );
};

export default MyPost;
