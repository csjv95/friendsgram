import React, { useEffect } from "react";
import MyProfile from "../componet/MyProfile/MyProfile";
import { useDispatch, useSelector } from "react-redux";
import getFollowingList from "../service/follow/getFollowingList";
import getFollowerList from "../service/follow/getFollowerList";
import {
  changeFollowModalState,
  changePostModalState,
  changeSendModalState,
} from "../redux/modules/modals/modalState";
import getBookMarkPostIds from "../service/bookMark/getBookMarkPostIds";
import { authGetUid } from "../service/auth/authGetUid";
import { clickedPostId, clickedPostUid } from "../redux/modules/post/clickPost";
import { isFollowState } from "../redux/modules/follow/isFollow";
import getCurrentUserData from "../service/fireStore/getCurrentUserData";

const ContainerMyProfile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const GET_USER_DATA_SUCCESS = "userData/GET_USER_DATA_SUCCESS";
    const FOLLOWINGLIST_SUCCESS = "followingList/FOLLOWINGLIST_SUCCESS";
    const FOLLOWERLIST_SUCCESS = "follwerList/FOLLOWERLIST_SUCCESS";
    const BOOKMARKPOSTIDS_SUCCESS = "bookMarkPostIds/BOOKMARKPOSTIDS_SUCCESS";
    const CURRENTUID = "getUid/CURRENTUID";

    getCurrentUserData(dispatch, GET_USER_DATA_SUCCESS);
    getFollowingList(dispatch, FOLLOWINGLIST_SUCCESS);
    getFollowerList(dispatch, FOLLOWERLIST_SUCCESS);
    getBookMarkPostIds(dispatch, BOOKMARKPOSTIDS_SUCCESS);
    authGetUid(dispatch, CURRENTUID);
  }, [dispatch]);

  const changePostModal = () => dispatch(changePostModalState());
  const changeFollowModal = () => dispatch(changeFollowModalState());
  const changeSendModal = () => dispatch(changeSendModalState());
  const setClickedPostId = (postId) => dispatch(clickedPostId(postId));
  const setClickedPostUid = (postUid) => dispatch(clickedPostUid(postUid));
  const setIsFollow = (isFollow) => dispatch(isFollowState(isFollow));

  const followingList = useSelector(
    (state) => state.followingList.followingList.followingList
  );
  const followerList = useSelector(
    (state) => state.followerList.followerList.followerList
  );
  const bookMarkPostIds = useSelector(
    (state) => state.bookMarkPostIds.bookMarkPostIds.bookMarkPostIds
  );
  const currentUserUid = useSelector(
    (state) => state.currentUserUid.currentUserUid
  );

  return (
    <MyProfile
      followingList={followingList}
      followerList={followerList}
      bookMarkPostIds={bookMarkPostIds}
      handlePostMenu={changePostModal}
      handleFollow={changeFollowModal}
      handleSend={changeSendModal}
      currentUserUid={currentUserUid}
      setClickedPostId={setClickedPostId}
      setClickedPostUid={setClickedPostUid}
      setIsFollow={setIsFollow}
    />
  );
};

export default ContainerMyProfile;
