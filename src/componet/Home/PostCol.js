import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { StProfileImg } from "../../Global/StProfileImg/StProfileImg";
import ImageSlider from "../../Global/ImageSlider/ImageSlider";
import time from "../../service/time/time";
import getMatchUid from "../../service/usersData/getMatchUid";
import { Theme } from "../../style/Theme";

import {
  StMenuIcon,
  StChatbubbleIcon,
  StHeartIcon,
  StHeartFill,
  StSendIcon,
  StBookmarkIcon,
  StSmileIocn,
  StBookmarkFill,
} from "../../Global/StIcon/StIcon";
import {
  StFunctionList,
  StPostFunction,
  StPostHeader,
  StProfileContainer,
  StProfileId,
  StProfileInfo,
  StProfileLocation,
  StComments,
  StCommentsArea,
} from "../../Global/StPost/StPost";
import getHeart from "../../service/heart/getHeart";
import setHeart from "../../service/heart/setHeart";
import getBookMarkUid from "../../service/bookMark/getBookMarkUid";
import setBookMark from "../../service/bookMark/setBookMark";

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

const PostCol = ({ article, userData,currentUserUid }) => {
  const [match, setMatchUser] = useState({});
  const { imgsData, noComments, timestamp, text, location, uid, postId } =
    article;
  const imgs = imgsData; // imageSlider에 매개변수를 img로 사용
  const { photoURL } = userData;
  const [heartData, setHeartData] = useState([]);
  const [bookMarkData,setBookMarkData] =useState([]);
 
  useEffect(() => {
    getMatchUid(uid, setMatchUser);
    getHeart(postId, setHeartData);
    getBookMarkUid(postId,setBookMarkData);
  }, [uid, postId]);

  const functionList = [
    {icon : heartData.includes(currentUserUid) ? <StHeartFill width="2" color={Theme.colors.red}/> : <StHeartIcon width="2" />},
    {icon : <StChatbubbleIcon width="2" />},
    {icon : <StSendIcon width="2" />},
    {icon : bookMarkData.includes(currentUserUid) ? <StBookmarkFill width="2" color={Theme.colors.black}/> : <StBookmarkIcon width="2" />},
  ];
 
  const clickHeart = () => {
    setHeart(postId, heartData);
  };

  const clickBookMark = () => {
    setBookMark(postId,bookMarkData);
  }

  const selectFnc = (index) => {
    if (index === 0) {
      clickHeart();
    } else if (index === 3) {
      clickBookMark();
    } else {
      return;
    }
  };

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
          <StProfileInfo
            margin="0 0 0 1em"
            display="flex"
            flexDirection="column"
          >
            <StProfileId fontWeight="600">{match.displayName}</StProfileId>
            <StProfileLocation fontSize="0.7em">{location}</StProfileLocation>
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

        <StPostFunction padding="1em">
          <StFunctionList margin="0 0 0.5em 0 ">
            {functionList.map((ftn, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    selectFnc(index);
                  }}
                >
                  {ftn.icon}
                </button>
              </li>
            ))}
          </StFunctionList>
          <div>{`좋아요 ${heartData.length}개`}</div>
          <div>comment</div>
          <div>{text}</div>
          <div>{time(timestamp)}</div>
        </StPostFunction>
        
        {!noComments && (
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
            <button>제출</button>
          </StComments>
        )}
      </StHomeArticle>
    </StArticleItem>
  );
};

export default PostCol;
