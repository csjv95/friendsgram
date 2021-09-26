import React, { useEffect } from "react";
import MyProfile from "../componet/MyProfile/MyProfile";
import { useDispatch, useSelector } from "react-redux";
import getFollowingList from "../service/follow/getFollowingList";
import getFollowerList from "../service/follow/getFollowerList";
import { changeFollowModalState } from "../redux/modules/modalState";

const ContainerMyProfile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const FOLLOWINGLIST_SUCCESS = "followingList/FOLLOWINGLIST_SUCCESS";
    const FOLLOWERLIST_SUCCESS = "follwerList/FOLLOWERLIST_SUCCESS";

    getFollowingList(dispatch, FOLLOWINGLIST_SUCCESS);
    getFollowerList(dispatch, FOLLOWERLIST_SUCCESS);
  }, [dispatch]);

  const changePostModal = () => dispatch(changeFollowModalState()); //handlePost

  const followingList = useSelector(
    (state) => state.followingList.followingList.followingList
  );
  const followerList = useSelector(
    (state) => state.followerList.followerList.followerList
  );
  // followingList={followingList}
  //           followerList={followerList}
  //           bookMarkPostIds={bookMarkPostIds}
  //           handlePostMenu={handlePostMenu}
  //           handleFollow={handleFollow}
  //           setClickedPostId={setClickedPostId}
  //           setClickedPostUid={setClickedPostUid}
  //           setIsFollow={setIsFollow}
  //           handleSend={handleSend}
  return (
    <MyProfile
      followingList={followingList}
      followerList={followerList}
      handlePostMenu={changePostModal}
    />
  );
};

export default ContainerMyProfile;
