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
import { authGetUid } from "../service/auth/authGetUid";

const ContainerMyProfile = ({
  setClickedPostId,
  setClickedPostUid,
  setIsFollow,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const FOLLOWINGLIST_SUCCESS = "followingList/FOLLOWINGLIST_SUCCESS";
    const FOLLOWERLIST_SUCCESS = "follwerList/FOLLOWERLIST_SUCCESS";
    const BOOKMARKPOSTIDS_SUCCESS = "bookMarkPostIds/BOOKMARKPOSTIDS_SUCCESS";
    const CURRENTUID = "getUid/CURRENTUID";

    getFollowingList(dispatch, FOLLOWINGLIST_SUCCESS);
    getFollowerList(dispatch, FOLLOWERLIST_SUCCESS);
    getBookMarkPostIds(dispatch, BOOKMARKPOSTIDS_SUCCESS);
    authGetUid(dispatch, CURRENTUID);
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
      //
      setClickedPostId={setClickedPostId}
      setClickedPostUid={setClickedPostUid}
      setIsFollow={setIsFollow}
    />
  );
};

export default ContainerMyProfile;
