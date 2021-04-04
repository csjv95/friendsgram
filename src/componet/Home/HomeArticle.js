import React from "react";
import styled from "styled-components";
import { StProfile } from "../../Global/StProfile/StProfile";
import {
  StMenuIcon,
  StChatbubbleIcon,
  StHeartIcon,
  StSendIcon,
  StBookmarkIcon,
  StDotIcon,
  StSmileIocn,
} from "../../Global/StIcon/StIcon";
import ImageSlider from "./ImageSlider";

const StArticleItem = styled.li`
  margin-right: 2em;
  margin-bottom: 4em;
  /* width: 38.375rem; */
  border: 1px solid #d3d3d3;
  border-radius: 0.2rem;
`;

const StArticleHeader = styled.header`
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StHeaderProfileCotainer = styled.div`
  height: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StHeaderProfileId = styled.span`
  margin-left: 1em;
`;

const StHomeArticle = styled.article`
  width: 100%;
`;

const StHomeArticleFuntion = styled.section`
  padding: 0 1em;

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
  padding: 0.8em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #d3d3d3;
`;

const StCommentsArea = styled.textarea`
  margin : 0 1em;
  padding : 0.5em;
  flex-grow: 1;
  border: none;
  resize: none;
  outline : none;
`;
const HomeArticle = () => {
  return (
    <StArticleItem>
      <StArticleHeader>
        <StHeaderProfileCotainer>
          <StProfile
            src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/56593842_427595071141963_9102473363216924672_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=8GvUdv2sa94AX_J7O03&oh=9a29dc6ab80091beab9f95a0f5ab8c6c&oe=6075CB7C"
            alt="my"
            height="100%"
          />
          <StHeaderProfileId>user ID</StHeaderProfileId>
        </StHeaderProfileCotainer>
        <StMenuIcon width="1.5" />
      </StArticleHeader>
      <StHomeArticle>
        <ImageSlider />
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
          <div>해쉬태크들</div>
          <div>upload data(2일전)</div>
        </StHomeArticleFuntion>
        <StComments>
          <StSmileIocn width="1.5" />
          <StCommentsArea placeholder="댓글 달기..."></StCommentsArea>
          <button>게시</button>
        </StComments>
      </StHomeArticle>
    </StArticleItem>
  );
};

export default HomeArticle;
