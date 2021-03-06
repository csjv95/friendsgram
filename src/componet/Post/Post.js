import React from "react";
import ContentCarousel from "../../Global/ContentCarousel/ContentCarousel";
import { StClear } from "../../Global/StIcon/StIcon";
import { StModalContainer, StModalBtn } from "../../Global/StModal/StModal";
import { Theme } from "../../style/Theme";

const Post = ({
  handlePost,
  content,
  postId,
  currentUserUid,
  handlePostMenu,
  setClickedPostId,
  setClickedPostUid,
  handleSend,
}) => {
  const onCloseModal = () => {
    handlePost();
  };
  return (
    <StModalContainer
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgColor={Theme.colors.modalBgColor}
    >
      <StModalBtn position="fixed" top="1em" right="1em" onClick={onCloseModal}>
        <StClear width="2.5em" color={Theme.colors.contentColor} />
      </StModalBtn>
      <ContentCarousel
        content={content}
        postId={postId}
        currentUserUid={currentUserUid}
        setClickedPostId={setClickedPostId}
        setClickedPostUid={setClickedPostUid}
        handlePostMenu={handlePostMenu}
        handleSend={handleSend}
      />
    </StModalContainer>
  );
};

export default Post;
