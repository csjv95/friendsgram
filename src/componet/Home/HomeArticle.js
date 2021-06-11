import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { StProfileImg } from "../../Global/StProfileImg/StProfileImg";
import {
  StMenuIcon,
  StChatbubbleIcon,
  StHeartIcon,
  StSendIcon,
  StBookmarkIcon,
  StSmileIocn,
  StLine,
} from "../../Global/StIcon/StIcon";
import ImageSlider from "../../Global/ImageSlider/ImageSlider";
import time from "../../service/time/time";
import getMatchUid from "../../service/usersData/getMatchUid";
import {
  StPostHeader,
  StProfileContainer,
  StProfileId,
  StProfileInfo,
  StProfileLocation,
} from "../../Global/StPost/StPost";

const StArticleItem = styled.li`
  margin-right: 2em;
  margin-bottom: 4em;
  /* width: 38.375rem; */
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 0.2rem;
  background-color: ${({ theme }) => theme.colors.contentColor};
`;

const StHomeArticle = styled.article`
  width: 100%;
`;

const ImageSliderContainer = styled.div`
  width: 37.5em;
  height: 40.5em;
`;

const StHomeArticleFuntion = styled.section`
  padding: 0.5em;
  & > :nth-child(n) {
    margin-bottom: 0.3em;
  }
`;

const StHomeIconBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StHomeIconBoxUl = styled.ul`
  display: flex;
`;

const StHomeIconBoxLi = styled.li`
  margin-right: 0.8em;
`;

const StComments = styled.form`
  padding: 0 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
`;

const StCommentsArea = styled.textarea`
  margin: 0 1em;
  padding: 1.3em 0.5em 0.5em 0.5em;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.contentColor};
`;

const HomeArticle = ({ article, userData }) => {
  const { imgsData, noComments, timestamp, text, location, uid } = article;
  const imgs = imgsData; // imageSlider에 매개변수를 img로 사용
  const { photoURL } = userData;
  const [match, setMatchUser] = useState({});

  useEffect(() => {
    getMatchUid(uid, setMatchUser);
  }, [uid]);
  return (
    <StArticleItem>
      <StPostHeader
        padding="1em"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <StProfileContainer
          height="2.5em"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <StProfileImg src={photoURL} alt="my profile img" height="100%" />
          <StProfileInfo margin="0 0 0 1em" display="flex" flexDirection="column">
            <StProfileId>{match.displayName}</StProfileId>
            <StProfileLocation>{location}</StProfileLocation>
          </StProfileInfo>
        </StProfileContainer>
        <button>
          <StMenuIcon width="1.5" />
        </button>
      </StPostHeader>
      <StHomeArticle>
        <ImageSliderContainer>
          <ImageSlider imgs={imgs} />
        </ImageSliderContainer>
        <StLine />
        <StHomeArticleFuntion>
          <StHomeIconBox>
            <StHomeIconBoxUl>
              <StHomeIconBoxLi>
                <StHeartIcon width="1.5" />
              </StHomeIconBoxLi>
              <StHomeIconBoxLi>
                <StChatbubbleIcon width="1.5" />
              </StHomeIconBoxLi>
              <StHomeIconBoxLi>
                <StSendIcon width="1.5" />
              </StHomeIconBoxLi>
            </StHomeIconBoxUl>
            <StBookmarkIcon width="2" />
          </StHomeIconBox>
          <div>좋아요 136</div>
          <div>{text}</div>
          <div>{time(timestamp)}</div>
        </StHomeArticleFuntion>
        {!noComments && (
          <StComments>
            <StSmileIocn width="1.5" />
            <StCommentsArea placeholder="댓글 달기..."></StCommentsArea>
            <button>게시</button>
          </StComments>
        )}
      </StHomeArticle>
    </StArticleItem>
  );
};

export default HomeArticle;
