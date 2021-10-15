import React from "react";
import styled from "styled-components";
import StButton from "../../Global/StButton/StButton";
import { StModalContainer, StModalMain } from "../../Global/StModal/StModal";
import deletePost from "../../service/postData/deletePost";
import { Theme } from "../../style/Theme";

const StMenuList = styled.ul`
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: cetner;
`;

const StMenuItem = styled.li`
  width: 100%;
  height: 100%;
  padding: 1em;
  border-bottom: 1px solid ${Theme.colors.borderColor};
  text-align: center;
  transition: all 300ms ease-in;

  &:hover {
    background-color: ${Theme.colors.backgroundColor};
  }

  & > :hover {
    font-weight: 600;
  }
`;
const PostMenu = ({
  handlePostMenu,
  clickedPostId,
  clickedPostUid,
  currentUserUid,
  history,
}) => {


  const myPostMenuList = [
    { text: "삭제", index: 1, ftn: "del" },
    { text: "게시물로 이동", index: 2, ftn: "move" },
    { text: "링크 복사", index: 3, ftn: "copy" },
    { text: "취소", index: 4, ftn: "cancel" },
  ];

  const userPostMenuList = [
    { text: "신고", index: 1, ftn: "" },
    // { text: "팔로우 취소", index: 2, ftn: "" },
    { text: "게시물 이동", index: 3, ftn: "move" },
    { text: "링크복사", index: 4, ftn: "copy" },
    { text: "취소", index: 5, ftn: "cancel" },
  ];

  const delPost = () => {
    deletePost(clickedPostId, handlePostMenu);
  };

  const selectFnc = (ftn) => {
    if (ftn === "del") {
      delPost();
    } else if (ftn === "cancel") {
      handlePostMenu();
    } else if(ftn === "move") {
      history.push({
        pathname: `/post/${clickedPostId}`
      })
      handlePostMenu();
    }else if (ftn === "copy") {
      const t = document.createElement("textarea");
      document.body.appendChild(t);
      t.value = `https://instargram-graph.web.app/post/${clickedPostId}`;
      t.select();
      document.execCommand('copy');
      document.body.removeChild(t);
      handlePostMenu();
    }
  };

  return (
    <StModalContainer
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgColor={Theme.colors.modalBgColor}
    >
      <StModalMain
        width="25em"
        height="auto"
        bgColor={Theme.colors.contentColor}
        border={`1px solid ${Theme.colors.borderColor}`}
        borderRadius={Theme.colors.borderRadius}
      >
        {currentUserUid === clickedPostUid ? (
          <StMenuList>
            {myPostMenuList.map((item) => (
              <StMenuItem
                key={item.index}
                onClick={() => {
                  selectFnc(item.ftn);
                }}
              >
                <StButton
                  width="100%"
                  height="100%"
                  btnText={item.text}
                  fontSize="1em"
                />
              </StMenuItem>
            ))}
          </StMenuList>
        ) : (
          <StMenuList>
            {userPostMenuList.map((item) => (
              <StMenuItem
                key={item.index}
                onClick={() => {
                  selectFnc(item.ftn);
                }}
              >
                <StButton
                  width="100%"
                  height="100%"
                  btnText={
                    item.index === 1 ?  `${item.text} (준비중입니다)` : item.text
                  }
                  fontSize="1em"
                />
              </StMenuItem>
            ))}
          </StMenuList>
        )}
      </StModalMain>
    </StModalContainer>
  );
};

export default PostMenu;
