import React from "react";
import { StModalContainer, StModalMain } from "../../Global/StModal/StModal";
import deletePost from "../../service/postData/deletePost";
import { Theme } from "../../style/Theme";

const PostMenu = ({
  handlePostMenu,
  clickedPostId,
  clickedPostUid,
  currentUserUid,
}) => {
  const delPost = () => {
    deletePost(clickedPostId);
  };
  return (
    <StModalContainer
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <StModalMain
        width="25em"
        height="30em"
        bgColor={Theme.colors.contentColor}
        border={`1px solid ${Theme.colors.borderColor}`}
        borderRadius={Theme.colors.borderRadius}
      >
        {currentUserUid === clickedPostUid ? (
          <ul>
            <li>
              <button onClick={delPost}>삭제</button>
            </li>
            <li>
              <button onClick={handlePostMenu}>취소</button>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <button onClick={handlePostMenu}>취소</button>
            </li>
          </ul>
        )}
      </StModalMain>
    </StModalContainer>
  );
};

export default PostMenu;
