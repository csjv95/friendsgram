import React from 'react';
import styled from "styled-components";
import { StProfile } from "../../Global/StProfile/StProfile";
import {
  StMenuIcon,
  StChatbubbleIcon,
  StHeartIcon,
  StSendIcon,
  StBookmarkIcon,
  StDotIcon,
  StSmileIocn
} from "../../Global/StIcon/StIcon";
import ImageSlider from './ImageSlider';

const StArticleContainer = styled.li`
  margin-right: 2em;
  margin-bottom: 4em;
  /* width: 38.375rem; */
  border: 1px solid #000000;
`;

const StArticleHeader = styled.header`
  padding: 0.2em;
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

  & > :nth-child(n){
    margin-bottom : 0.3em;
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
  margin-right: 0.5em;
`;

const HomeArticle = () => {
  return (
    <StArticleContainer>
    <StArticleHeader>
      <StHeaderProfileCotainer>
        <StProfile
          src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/56593842_427595071141963_9102473363216924672_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=8GvUdv2sa94AX_J7O03&oh=9a29dc6ab80091beab9f95a0f5ab8c6c&oe=6075CB7C"
          alt="my"
        />
        <StHeaderProfileId>user ID</StHeaderProfileId>
      </StHeaderProfileCotainer>
      <StMenuIcon width="1.5"/>
    </StArticleHeader>
    <StHomeArticle>
    <ImageSlider />
      <StHomeArticleFuntion>
        <StHomeIconBox>
          <StHomeIconBoxUl>
            <StHomeIconBoxLi>
              <StHeartIcon width="1.5"/>
            </StHomeIconBoxLi>
            <StHomeIconBoxLi>
              <StChatbubbleIcon width="1.5"/>
            </StHomeIconBoxLi>
            <StHomeIconBoxLi>
              <StSendIcon width="1.5"/>
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
          <StBookmarkIcon width="2"/>
        </StHomeIconBox>
        <div>좋아요 136</div>
        <div>해쉬태크들</div>
        <div>upload data(2일전)</div>
        <div><StSmileIocn width="1.5"/></div>
      </StHomeArticleFuntion>
    </StHomeArticle>
    
  </StArticleContainer>
  );
};

export default HomeArticle;