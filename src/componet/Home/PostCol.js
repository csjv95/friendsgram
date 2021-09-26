import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { StProfileImg } from "../../Global/StProfileImg/StProfileImg";
import ImageSlider from "../../Global/ImageSlider/ImageSlider";
import time from "../../service/time/time";
import getMatchUid from "../../service/usersData/getMatchUid";
import { Theme } from "../../style/Theme";
import Picker from "emoji-picker-react";

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
  StComment,
  StCommentsArea,
  StTextContainer,
  StDisplayName,
  StJustText,
  StMoreText,
  StCommentContainer,
} from "../../Global/StPost/StPost";
import getHeart from "../../service/heart/getHeart";
import setHeart from "../../service/heart/setHeart";
import getBookMarkPostIds from "../../service/bookMark/getBookMarkPostIds";
import setBookMark from "../../service/bookMark/setBookMark";
import getHeartLength from "../../service/heart/getHeartLength";
import { Link } from "react-router-dom";
import getUserImg from "../../service/usersData/getUserImg";
import { useRef } from "react";
import StButton from "../../Global/StButton/StButton";
import setComments from "../../service/comments/setComments";
import getComments from "../../service/comments/getComments";

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
  max-width: 37.5em;
  max-height: 40.5em;
`;

const PostCol = ({
  article,
  handlePostMenu,
  setClickedPostId,
  setClickedPostUid,
  changeSendModal,
}) => {
  const [match, setMatchUser] = useState({});
  const {
    imgsData,
    noComments,
    timestamp,
    text,
    location,
    uid,
    postId,
    displayName,
  } = article;
  console.log("article", article.postId);
  const imgs = imgsData; // imageSlider에 매개변수를 img로 사용
  const [photoURL, setPhotoURL] = useState("");
  const [heartData, setHeartData] = useState([]);
  const [heartLength, setHeartLength] = useState([]);
  const [bookMarkPostIds, setBookMarkPostIds] = useState([]);
  const [comment, setComment] = useState("");
  const [allComment, setAllComment] = useState([]);
  const justTextRef = useRef();
  const moreTextRef = useRef();
  const [viewEomji, setViewEmoji] = useState(false);

  useEffect(() => {
    getMatchUid(uid, setMatchUser);
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
    const profileImg = getUserImg(uid, setPhotoURL);

    return () => {
      profileImg();
    };
  }, [uid, setPhotoURL]);

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
    } else if (index === 2) {
      // message 보내기 창
      changeSendModal();
    } else if (index === 3) {
      clickBookMark();
    } else {
      return;
    }
  };

  const sendComment = (event) => {
    console.log(comment);
    event.preventDefault();
    setComments(postId, uid, comment);
    setComment("");
  };

  const commentKeyDown = (event) => {
    if (event.code === "Enter" && event.shiftKey) {
      setComment(event.target.value, "\n");
    } else if (event.code === "Enter") {
      sendComment(event);
    }
  };

  const onEmojiClick = async (event, emojiObject) => {
    const emoji = await emojiObject.emoji;
    setComment(comment + emoji);
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
            <StProfileId fontWeight="600">
              <Link to={displayName}> {match.displayName}</Link>
            </StProfileId>

            <StProfileLocation fontSize="0.7em">{location}</StProfileLocation>
          </StProfileInfo>
        </StProfileContainer>
        <button
          onClick={() => {
            handlePostMenu();
            setClickedPostId(postId);
            setClickedPostUid(uid);
          }}
        >
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
          <div>{`좋아요 ${heartLength.length}개`}</div>

          <StTextContainer>
            <StDisplayName>{displayName}</StDisplayName>
            <StJustText ref={justTextRef}>
              {text.length > 15 ? (
                <p>{`${text.slice(0, 16)} ...`}</p>
              ) : (
                <p>{text}</p>
              )}
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
            <StMoreText ref={moreTextRef}>{text}</StMoreText>
          </StTextContainer>

          {/* allcooment가 3보다 크면 postRow보여주기 */}

          {allComment.map((item) => (
            <StCommentContainer key={item.time}>
              <StDisplayName>{item.displayName}</StDisplayName>
              <StComment>{item.comment}</StComment>
            </StCommentContainer>
          ))}

          <div>{time(timestamp)}</div>
        </StPostFunction>

        {!noComments && (
          <StComments
            position="relative"
            padding="0.5em 1em"
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderTop={`1px solid ${Theme.colors.borderColor}`}
            onSubmit={sendComment}
          >
            <StButton
              btnText={<StSmileIocn width="1.5em" />}
              onClick={(event) => {
                event.preventDefault();
                setViewEmoji(!viewEomji);
              }}
            />

            {viewEomji && (
              <Picker
                pickerStyle={{
                  position: "absolute",
                  bottom: "60px",
                  left: "0",
                }}
                onEmojiClick={onEmojiClick}
              />
            )}

            <StCommentsArea
              placeholder="댓글 달기..."
              margin="0 1em"
              padding="1em 0 0 0 "
              flexGrow="1"
              value={comment}
              onChange={(event) => setComment(event.target.value)}
              onKeyDown={(event) => commentKeyDown(event)}
            />
            <button onClick={sendComment}>제출</button>
          </StComments>
        )}
      </StHomeArticle>
    </StArticleItem>
  );
};

export default PostCol;
