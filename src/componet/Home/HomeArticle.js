import React from "react";
import styled from "styled-components";
import { StProfileImg } from "../../Global/StProfileImg/StProfileImg";
import {
  StMenuIcon,
  StChatbubbleIcon,
  StHeartIcon,
  StSendIcon,
  StBookmarkIcon,
  StDotIcon,
  StSmileIocn,
  StLine,
} from "../../Global/StIcon/StIcon";
import ImageSlider from "./ImageSlider";
import time from "../../service/time/time";

const StArticleItem = styled.li`
  margin-right: 2em;
  margin-bottom: 4em;
  /* width: 38.375rem; */
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 0.2rem;
  background-color: ${({ theme }) => theme.colors.contentColor};
`;

const StArticleHeader = styled.header`
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StHeaderProfileCotainer = styled.div`
  height: 2.5em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StProfileInfo = styled.div`
  margin-left: 1em;
  display : flex;
  flex-direction : column;
  justify-items: center;
`

const StProfileId = styled.span`
  font-weight : 600;
`;

const StprofileLoction = styled.span`
  margin-top: 0.2em;
  font-size : 0.4em;
`

const StHomeArticle = styled.article`
  width: 100%;
`;

const ImageSliderContainer = styled.div`
  width: 37.5em;
  height: 37.5em;
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
  border: none;
  resize: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.contentColor};
`;

const HomeArticle = ({ article,userData}) => {
  const { imgsData, noComments, timestamp, text, location, displayName } = article;
  const imgs = imgsData; // imageSlider에 매개변수를 img로 사용
  const {photoURL} = userData;

  return (
    <StArticleItem>
      <StArticleHeader>
        <StHeaderProfileCotainer>
          <StProfileImg
            src={photoURL}
            alt="my profile img"
            height="100%"
          />
          <StProfileInfo>
            <StProfileId>{displayName}</StProfileId>
            <StprofileLoction>{location}</StprofileLoction>
          </StProfileInfo>
        </StHeaderProfileCotainer>
        <StMenuIcon width="1.5" />
      </StArticleHeader>
      <StLine />
      <StHomeArticle>
        <ImageSliderContainer>
          <ImageSlider imgWidth="37.5" imgHeight="37.5" imgs={imgs} />
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
            <StHomeIconBoxUl>
              <StHomeIconBoxLi>
                <StDotIcon />
              </StHomeIconBoxLi>
              <StHomeIconBoxLi>
                <StDotIcon />
              </StHomeIconBoxLi>
              <StHomeIconBoxLi>
                <StDotIcon />
              </StHomeIconBoxLi>
              <StHomeIconBoxLi>
                <StDotIcon />
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
