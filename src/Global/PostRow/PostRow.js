import React, { useEffect, useState } from "react";
import styled from "styled-components";
import getBookMarkPostIds from "../../service/bookMark/getBookMarkPostIds";
import setBookMark from "../../service/bookMark/setBookMark";
import getHeart from "../../service/heart/getHeart";
import getHeartLength from "../../service/heart/getHeartLength";
import setHeart from "../../service/heart/setHeart";
import time from "../../service/time/time";
import getUserData from "../../service/usersData/getUserData";
import { Theme } from "../../style/Theme";
import ImageSlider from "../ImageSlider/ImageSlider";
import { useRef } from "react";
import {
  StBookmarkIcon,
  StBookmarkFill,
  StChatbubbleIcon,
  StHeartIcon,
  StHeartFill,
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
  StTextContainer,
  StDisplayName,
  StJustText,
  StMoreText,
  StCommentContainer,
  StJustComment,
  StMoreComment,
  StComment,
} from "../StPost/StPost";
import { StProfileImg } from "../StProfileImg/StProfileImg";
import StButton from "../../Global/StButton/StButton";
import setComments from "../../service/comments/setComments";
import getComments from "../../service/comments/getComments";

const StPostArticle = styled.article`
  width: 65%;
  height: 96%; //밑에 nav보이기 위해서
  border-right: 1px solid ${({ theme }) => theme.colors.borderColor};
  background-color: ${({ theme }) => theme.colors.contentColor};
`;

const StPostAside = styled.aside`
  width: 35%;
  height: 96%; //밑에 nav보이기 위해서
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.contentColor};
`;

const PostRow = ({
  post,
  currentUserUid,
  handlePostMenu,
  setClickedPostId,
  setClickedPostUid,
}) => {
  const { uid, text, timestamp, postId, displayName, location, noComments } =
    post;
  const [userData, setUserData] = useState([]);
  const { photoURL } = userData;
  const [heartData, setHeartData] = useState([]);
  const [heartLength, setHeartLength] = useState([]);
  const [bookMarkPostIds, setBookMarkPostIds] = useState([]);
  const [comment, setComment] = useState("");
  const [allComment, setAllComment] = useState([]);
  const justTextRef = useRef();
  const moreTextRef = useRef();
  const justCommentRef = useRef();
  const moreCommentRef = useRef();

  useEffect(() => {
    getUserData(uid, setUserData);
    const heart = getHeart(setHeartData);
    const bookMark = getBookMarkPostIds(setBookMarkPostIds);
    const heartLength = getHeartLength(postId, setHeartLength);

    return () => {
      heart();
      bookMark();
      heartLength();
    };
  }, [uid, postId]);

  useEffect(() => {
    const comments = getComments(postId, setAllComment);

    return () => {
      comments();
    };
  }, [postId, uid]);

  const functionList = [
    {
      icon: heartData.includes(postId) ? (
        <StHeartFill width="2" color={Theme.colors.red} />
      ) : (
        <StHeartIcon width="2" />
      ),
    },
    { icon: <StChatbubbleIcon width="2" /> },
    { icon: <StSendIcon width="2" /> },
    {
      icon: bookMarkPostIds.includes(postId) ? (
        <StBookmarkFill width="2" color={Theme.colors.black} />
      ) : (
        <StBookmarkIcon width="2" />
      ),
    },
  ];

  const clickHeart = () => {
    setHeart(postId, heartData);
  };

  const clickBookMark = () => {
    setBookMark(postId, bookMarkPostIds);
  };

  const selectFnc = (index) => {
    if (index === 0) {
      clickHeart();
    } else if (index === 3) {
      clickBookMark();
    } else {
      return;
    }
  };

  const sendComment = (event) => {
    event.preventDefault();
    // firebase에 저장하기
    // const comment = event.target.value;
    setComments(postId, uid, comment);
    event.target.value = "";
  };

  const commentKeyDown = (event) => {
    if (event.code === "Enter" && event.shiftKey) {
      setComment(event.target.value, "\n");
    } else if (event.code === "Enter") {
      sendComment(event);
    }
  };

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
          <button
            onClick={() => {
              handlePostMenu();
              setClickedPostId(postId);
              setClickedPostUid(uid);
            }}
          >
            <StMenuIcon width="1.5em" />
          </button>
        </StPostHeader>
        <StPostText
          padding="1em"
          flexGrow="1"
          borderBottom={`1px solid ${Theme.colors.borderColor}`}
        >
          <StTextContainer>
            <StDisplayName>{displayName}</StDisplayName>
            <StJustText ref={justTextRef}>
              {text.length > 15 ? `${text.slice(0, 16)} ...` : text}
              {text.length > 15 && (
                <StButton
                  margin="0 0.5em"
                  fontWeight="600"
                  color={Theme.colors.skyblueInnerText}
                  btnText="more"
                  onClick={() => {
                    justTextRef.current.style.display = "none";
                    moreTextRef.current.style.display = "block";
                  }}
                />
              )}
            </StJustText>
            <StMoreText ref={moreTextRef}>
              {text}
              <StButton
                margin="0 0.5em"
                fontWeight="600"
                color={Theme.colors.skyblueInnerText}
                btnText="close"
                onClick={() => {
                  justTextRef.current.style.display = "block";
                  moreTextRef.current.style.display = "none";
                }}
              />
            </StMoreText>
          </StTextContainer>
          {allComment.map((item) => (
            <StCommentContainer key={item.time} padding="0.2em 0 0 0">
              <StDisplayName>{item.displayName}</StDisplayName>
              <StComment ref={justCommentRef}>{item.comment}</StComment>
            </StCommentContainer>
          ))}
        </StPostText>

        <StPostFunction padding="1em" display="flex">
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
          <div>{`좋아요 ${heartLength.length}개`}</div>
          <div>{time(timestamp)}</div>
        </StPostFunction>

        {!noComments && (
          <StComments
            padding="0.5em 1em"
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderTop={`1px solid ${Theme.colors.borderColor}`}
            onSubmit={sendComment}
          >
            <StSmileIocn width="1.5em" />
            <StCommentsArea
              placeholder="댓글 달기..."
              margin="0 1em"
              padding="1em 0 0 0 "
              flexGrow="1"
              onChange={(event) => setComment(event.target.value)}
              onKeyDown={(event) => commentKeyDown(event)}
            />
            <button>게시</button>
          </StComments>
        )}
      </StPostAside>
    </>
  );
};

export default PostRow;
