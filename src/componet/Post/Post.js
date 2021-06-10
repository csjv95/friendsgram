import React from "react";
import PostRow from "../../Global/PostRow/PostRow";
import { StArrowLeft, StArrowRight, StClear } from "../../Global/StIcon/StIcon";
import {
  StModalContainer,
  StModalMain,
  StModalBtn,
} from "../../Global/StModal/StModal";
import { Theme } from "../../style/Theme";


const Post = ({ handlePost, myPostData }) => {
  const onCloseModal = () => {
    handlePost();
  };

  return (
    <StModalContainer
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <StModalBtn position="fixed" top="1em" right="1em" onClick={onCloseModal}>
        <StClear width="2.5em" color={Theme.colors.contentColor} />
      </StModalBtn>

      <StModalBtn position="absolute" top="34em" left="1em" onClick={onCloseModal}>
        <StArrowLeft width="2.5em" color={Theme.colors.black} />
      </StModalBtn>

      <StModalBtn position="absolute" top="34em" right="1em" onClick={onCloseModal}>
        <StArrowRight width="2.5em" color={Theme.colors.black} />
      </StModalBtn>

      {myPostData.map((post) => (
        <StModalMain
          key={post.postId}
          width="60em"
          height="37em"
          display="flex"
        >
          <PostRow post={post}/>
        </StModalMain>
      ))}
    </StModalContainer>
  );
};

export default Post;
