import React, { useEffect } from "react";
import MyProfile from "../componet/MyProfile/MyProfile";
import { useDispatch, useSelector } from "react-redux";
import getFollowingList from "../service/follow/getFollowingList";
import getFollowerList from "../service/follow/getFollowerList";
import {
  changeFollowModalState,
  changeSendModalState,
} from "../redux/modules/modals/modalState";
import getBookMarkPostIds from "../service/bookMark/getBookMarkPostIds";

const ContainerMyProfile = ({
  setClickedPostId,
  setClickedPostUid,
  setIsFollow,
  currentUserUid,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const FOLLOWINGLIST_SUCCESS = "followingList/FOLLOWINGLIST_SUCCESS";
    const FOLLOWERLIST_SUCCESS = "follwerList/FOLLOWERLIST_SUCCESS";
    const BOOKMARKPOSTIDS_SUCCESS = "bookMarkPostIds/BOOKMARKPOSTIDS_SUCCESS";

    getFollowingList(dispatch, FOLLOWINGLIST_SUCCESS);
    getFollowerList(dispatch, FOLLOWERLIST_SUCCESS);
    getBookMarkPostIds(dispatch, BOOKMARKPOSTIDS_SUCCESS);
  }, [dispatch]);

  const changePostModal = () => dispatch(changeFollowModalState());
  const changeFollowModal = () => dispatch(changeFollowModalState());
  const changeSendModal = () => dispatch(changeSendModalState());

  const followingList = useSelector(
    (state) => state.followingList.followingList.followingList
  );
  const followerList = useSelector(
    (state) => state.followerList.followerList.followerList
  );
  const bookMarkPostIds = useSelector(
    (state) => state.bookMarkPostIds.bookMarkPostIds.bookMarkPostIds
  );

  return (
    <MyProfile
      followingList={followingList}
      followerList={followerList}
      bookMarkPostIds={bookMarkPostIds}
      handlePostMenu={changePostModal}
      handleFollow={changeFollowModal}
      handleSend={changeSendModal}
      //
      setClickedPostId={setClickedPostId}
      setClickedPostUid={setClickedPostUid}
      setIsFollow={setIsFollow}
      currentUserUid={currentUserUid}
    />
  );
};

export default ContainerMyProfile;
