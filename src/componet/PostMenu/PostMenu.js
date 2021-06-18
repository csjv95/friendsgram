import React from "react";
import styled from "styled-components";
import { StModalContainer, StModalMain } from "../../Global/StModal/StModal";
import { Theme } from "../../style/Theme";

const PostMenu = ({handlePostMenu}) => {
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
        {/* 현재 유저의 게시물일때 */}
        <ul>
          <li><button onClick={handlePostMenu}>취소</button></li>
        </ul>
        {/* 현재 유저의 게시물이 아닐때 */}
        <ul>
          <li><button>취소</button></li>
        </ul>
      </StModalMain>
    </StModalContainer>
  );
};

export default PostMenu;
