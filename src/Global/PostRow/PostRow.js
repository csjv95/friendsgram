import React, { useEffect, useState } from "react";
import styled from "styled-components";
import time from "../../service/time/time";
import getUserData from "../../service/usersData/getUserData";
import { Theme } from "../../style/Theme";
import ImageSlider from "../ImageSlider/ImageSlider";
import {
  StBookmarkIcon,
  StChatbubbleIcon,
  StHeartIcon,
  StMenuIcon,
  StSendIcon,
  StSmileIocn,
} from "../StIcon/StIcon";
import {
  StPostHeader,
  StProfileContainer,
  StProfileId,
  StProfileInfo,
  StProfileLocation,
  StCommentsArea,
  StPostText,
  StPostFunction,
  StFunctionList,
  StComments,
} from "../StPost/StPost";
import { StProfileImg } from "../StProfileImg/StProfileImg";

const StPostArticle = styled.article`
  width: 65%;
  height: 97%;  //밑에 nav보이기 위해서
`;

const StPostAside = styled.aside`
  width: 35%;
  height: 97%;  //밑에 nav보이기 위해서
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.contentColor};
`;

const PostRow = ({ post }) => {
  const { uid, text, timestamp } = post;
  const [userData, setUserData] = useState([]);
  const { photoURL, displayName, location } = userData;

  const functionList = [
    <StHeartIcon width="2em" />,
    <StChatbubbleIcon width="2em" />,
    <StSendIcon width="2em" />,
    <StBookmarkIcon width="2em" />,
  ];

  useEffect(() => {
    getUserData(uid, setUserData);
  }, [uid]);

  return (
    <>
      <StPostArticle>
        <ImageSlider imgs={post.imgsData} />
      </StPostArticle>
      <StPostAside>
        <StPostHeader
          padding="1em"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <StProfileContainer
            height="2.5em"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <StProfileImg src={photoURL} alt="profile img" height="100%" />
            <StProfileInfo
              margin="0 0 0 1em"
              display="flex"
              flexDirection="column"
            >
              <StProfileId>{displayName}</StProfileId>
              <StProfileLocation>{location}</StProfileLocation>
            </StProfileInfo>
          </StProfileContainer>
          <button>
            <StMenuIcon width="1.5em" />
          </button>
        </StPostHeader>
        <StPostText
          flexGrow="1"
          borderBottom={`1px solid ${Theme.colors.borderColor}`}
        >
          {text}
          댓글
        </StPostText>

        <StPostFunction padding="1em" display="flex">
          <StFunctionList margin="0 0 0.5em 0 ">
            {functionList.map((ftn,index) => (
              <li key={index}>
                <button>{ftn}</button>
              </li>
            ))}
          </StFunctionList>
          <div>좋아요114</div>
          <div>{time(timestamp)}</div>
        </StPostFunction>

        <StComments
          padding="0.5em 1em"
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderTop={`1px solid ${Theme.colors.borderColor}`}
        >
          <StSmileIocn width="1.5em" />
          <StCommentsArea
            placeholder="댓글 달기..."
            margin="0 1em"
            padding="1em 0 0 0 "
            flexGrow="1"
          />
          <button>게시</button>
        </StComments>
      </StPostAside>
    </>
  );
};

export default PostRow;
