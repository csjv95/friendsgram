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

      {myPostData.map((post) => (
        <StModalMain
          key={post.postId}
          width="60em"
          height="37em"
          display="flex"
        >
          <PostRow post={post} />
          <StModalBtn
            position="absolute"
            top="23em"
            left="-3em"
            onClick={onCloseModal}
          >
            <StArrowLeft width="3em" color={Theme.colors.borderColor} />
          </StModalBtn>

          <StModalBtn
            position="absolute"
            top="23em"
            right="-3em"
            onClick={onCloseModal}
          >
            <StArrowRight width="3em" color={Theme.colors.borderColor} />
          </StModalBtn>
        </StModalMain>
      ))}
    </StModalContainer>
  );
};

export default Post;
