import React from "react";
import { Link } from "react-router-dom";
import Picker from "emoji-picker-react";
import ImageSlider from "../../Global/ImageSlider/ImageSlider";
import StButton from "../../Global/StButton/StButton";
import {
  StImageMultiple,
  StLine,
  StMenuIcon,
  StSmileIocn,
} from "../../Global/StIcon/StIcon";

import { StMainRouterSection } from "../../Global/StMainRouterSection/StMainRouterSection";
import {
  StPostFunction,
  StPostHeader,
  StProfileContainer,
  StProfileId,
  StProfileInfo,
  StProfileLocation,
  StFunctionList,
  StDisplayName,
  StTextContainer,
  StJustText,
  StMoreText,
  StCommentContainer,
  StComment,
  StComments,
  StCommentsArea,
} from "../../Global/StPost/StPost";
import { StProfileImg } from "../../Global/StProfileImg/StProfileImg";
import { StHomeArticle, ImageSliderContainer } from "../Home/PostCol";

import styled from "styled-components";
import { StDiv, StSpan } from "../../Global/StTags/StTags";
import { Theme } from "../../style/Theme";
import time from "../../service/time/time";
import {
  StPostButton,
  StPostImg,
  StPostItem,
} from "../../Global/StMyProfileRoute/StMyProfileRoute";

const StPostContainer = styled.section`
  margin: 0 auto;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  background-color: ${({ theme }) => theme.colors.contentColor};

  @media only screen and (max-width: 600px) {
    margin: 0 auto;
    width: 100%;
    border: none;
  }
`;

const StListContainer = styled.div`
  padding-top: 2em;
  margin: 0 auto; 
  min-width: 37em;

  @media only screen and (max-width: 600px) {
    margin: 0;
    min-width: 100%;
  }
`

const ClickedPost = ({
  postData,
  userPosts,
  photoURL,
  heartLength,
  comment,
  allComment,
  justTextRef,
  moreTextRef,
  viewEomji,
  setViewEmoji,
  functionList,
  selectFnc,
  sendComment,
  commentChange,
  commentKeyDown,
  onEmojiClick,
  handlePostMenu,
  setClickedPostId,
  setClickedPostUid,
  history,
}) => {
  return (
    <StMainRouterSection
      flexDirection="column"
      padding="6em 0 3em 0"
      postPaddingTop="3em"
      postPaddingBottom="2em"
    >
      <div style={{ margin: "0 auto" }}>
        <StPostContainer>
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
                  <Link to={`/${postData.displayName}`}>
                    {postData.displayName}
                  </Link>
                </StProfileId>

                <StProfileLocation fontSize="0.7em">
                  {postData.location}
                </StProfileLocation>
              </StProfileInfo>
            </StProfileContainer>

            <StButton
              btnText={<StMenuIcon width="1.5" />}
              onClick={() => {
                handlePostMenu();
                setClickedPostId(postData.postId);
                setClickedPostUid(postData.uid);
              }}
            />
          </StPostHeader>

          <StHomeArticle>
            <ImageSliderContainer reMaxWidth="100%">
              <ImageSlider imgs={postData.imgsData}></ImageSlider>
            </ImageSliderContainer>

            <StPostFunction padding="1em">
              <StFunctionList margin="0 0 0.5em 0 ">
                {functionList.map((ftn, index) => (
                  <li key={index}>
                    <StButton
                      btnText={ftn.icon}
                      onClick={() => {
                        selectFnc(index);
                      }}
                    ></StButton>
                  </li>
                ))}
              </StFunctionList>

              <StDiv>{`좋아요 ${heartLength.length}개`}</StDiv>

              <StTextContainer>
                <StDisplayName>{postData.displayName}</StDisplayName>
                <StJustText ref={justTextRef}>
                  {postData.text && postData.text.length > 15 ? (
                    <p>{`${
                      postData.text && postData.text.slice(0, 16)
                    } ...`}</p>
                  ) : (
                    <p>{postData.text && postData.text}</p>
                  )}
                  {postData.text && postData.text.length > 15 && (
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
                  {postData.text && postData.text}
                </StMoreText>
              </StTextContainer>

              {allComment.map((item) => (
                <StCommentContainer key={item.time} padding="0.2em 0">
                  <StDisplayName>{item.displayName}</StDisplayName>
                  <StComment>{item.comment}</StComment>
                </StCommentContainer>
              ))}
              <div>{time(postData.timestamp)}</div>
            </StPostFunction>

            {!postData.noComments && (
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
                  onChange={(event) => commentChange(event)}
                  onKeyDown={(event) => commentKeyDown(event)}
                />
                <button onClick={sendComment}>제출</button>
              </StComments>
            )}
          </StHomeArticle>
        </StPostContainer>
      </div>
      {userPosts && (
        <StListContainer >
          <StLine />
          <StDiv width="100%" padding="1em 1em" display="flex">
            <StSpan fontSize="0.9e," fontWeight="600">
              {postData.displayName}{" "}
            </StSpan>
            <StDiv color="grey">{`님 게시물 더 보기`}</StDiv>
          </StDiv>

          <ul
            style={{
              display: "flex",
              flexWrap: "wrap",
              maxWidth: "37.5em",
            }}
          >
            {userPosts.map((data, postId) => (
              <StPostItem
                key={postId}
                onClick={async () => {
                  history.push({
                    pathname: `/post/${data.postId}`,
                  });
                }}
              >
                <StPostButton>
                  <StPostImg src={data.imgsData[0].imgUrl} alt="my post" />
                </StPostButton>
                {data.imgsData.length > 1 && (
                  <StImageMultiple
                    width="1.4"
                    color="white"
                    position="absolute"
                    top="14"
                    right="14"
                  />
                )}
              </StPostItem>
            ))}
          </ul>
        </StListContainer>
      )}
    </StMainRouterSection>
  );
};

export default ClickedPost;
