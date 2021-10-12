import React, { useEffect, useRef, useState } from "react";
import ClickedPost from "../../componet/ClickedPost/ClickedPost";
import getPostUsePostId from "../../service/postData/getPostUsePostId";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../../Global/Loading/LoadingSpinner";

import {
  changePostModalState,
  changeSendModalState,
} from "../../redux/modules/modals/modalState";
import {
  clickedPostId,
  clickedPostUid,
} from "../../redux/modules/post/clickPost";
import {
  StHeartFill,
  StHeartIcon,
  StChatbubbleIcon,
  StSendIcon,
  StBookmarkFill,
  StBookmarkIcon,
} from "../../Global/StIcon/StIcon";
import getHeart from "../../service/heart/getHeart";
import { Theme } from "../../style/Theme";
import getBookMarkPostIds from "../../service/bookMark/getBookMarkPostIds";
import setHeart from "../../service/heart/setHeart";
import setBookMark from "../../service/bookMark/setBookMark";
import getHeartLength from "../../service/heart/getHeartLength";
import getComments from "../../service/comments/getComments";
import setComments from "../../service/comments/setComments";
import { getMyPost } from "../../service/postData/getMyPost";
import getUserImg from "../../service/usersData/getUserImg";
import { useHistory } from "react-router";

const ContainerClickedPost = ({ postId }) => {
  const dispatch = useDispatch();
  const [photoURL, setPhotoURL] = useState("");
  const [heartData, setHeartData] = useState([]);
  const [heartLength, setHeartLength] = useState([]);
  const [allComment, setAllComment] = useState([]);
  const [comment, setComment] = useState("");
  const [userPosts, setUserPosts] = useState([]);
  const [viewEomji, setViewEmoji] = useState(false);
  const justTextRef = useRef();
  const moreTextRef = useRef();
  const history = useHistory();

  const { postData, loading } = useSelector((state) => state.postData.postData);

  useEffect(() => {
    const BOOKMARKPOSTIDS_SUCCESS = "bookMarkPostIds/BOOKMARKPOSTIDS_SUCCESS";

    const heartLength = getHeartLength(postId, setHeartLength);
    const comments = getComments(postId, setAllComment);
    getPostUsePostId(postId, dispatch);
    getBookMarkPostIds(dispatch, BOOKMARKPOSTIDS_SUCCESS);

    return () => {
      heartLength();
      comments();
    };
  }, [dispatch, postId]);

  useEffect(() => {
    const heart = getHeart(setHeartData);

    return () => {
      heart();
    };
  }, []);

  useEffect(() => {
    // const profileImg = getUserImg(postData.uid, setPhotoURL);
    !loading && getMyPost(setUserPosts, postData.displayName);

    !loading && getUserImg(postData.uid, setPhotoURL);
    // return () => {
    //   profileImg();
    // };
  }, [postData, loading]);

  const changePostMenuModal = () => dispatch(changePostModalState());
  const changeSnedModal = () => dispatch(changeSendModalState());
  const setClickedPostId = (postId) => dispatch(clickedPostId(postId));
  const setClickedPostUid = (postUid) => dispatch(clickedPostUid(postUid));

  const bookMarkPostIds = useSelector(
    (state) => state.bookMarkPostIds.bookMarkPostIds.bookMarkPostIds
  );

  const clickHeart = () => {
    setHeart(postId, heartData);
  };

  const clickBookMark = () => {
    setBookMark(postId, bookMarkPostIds);
  };

  const sendComment = (event) => {
    console.log(event.target.value);
    event.preventDefault();
    setComments(postId, comment);
    setComment("");
    viewEomji && setViewEmoji(!viewEomji);
  };

  const commentChange = (event) => {
    if (event.keyCode == "13") {
      setComment("");
    } else {
      setComment(event.target.value);
    }
  };

  const commentKeyDown = (event) => {
    if (event.keyCode == "13" && event.shiftKey) {
      setComment(event.target.value, "\n");
    } else if (event.keyCode == "13") {
      sendComment(event);
    }
  };

  const onEmojiClick = async (event, emojiObject) => {
    const emoji = await emojiObject.emoji;
    setComment(comment + emoji);
  };

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

  const selectFnc = (index) => {
    if (index === 0) {
      clickHeart();
    } else if (index === 2) {
      // message 보내기 창
      changeSnedModal();
    } else if (index === 3) {
      clickBookMark();
    } else {
      return;
    }
  };
  if (loading) return <LoadingSpinner />;

  return (
    <ClickedPost
      postData={postData}
      userPosts={userPosts}
      photoURL={photoURL}
      heartLength={heartLength}
      comment={comment}
      allComment={allComment}
      justTextRef={justTextRef}
      moreTextRef={moreTextRef}
      viewEomji={viewEomji}
      setViewEmoji={setViewEmoji}
      functionList={functionList}
      selectFnc={selectFnc}
      sendComment={sendComment}
      commentChange={commentChange}
      commentKeyDown={commentKeyDown}
      onEmojiClick={onEmojiClick}
      handlePostMenu={changePostMenuModal}
      setClickedPostId={setClickedPostId}
      setClickedPostUid={setClickedPostUid}
      history={history}
    />
  );
};

export default ContainerClickedPost;
