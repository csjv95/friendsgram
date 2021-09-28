import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FollowView from "../../componet/FollowView/FollowView";
import { changeFollowModalState } from "../../redux/modules/modals/modalState";

const ContainerFollowView = () => {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const changeFollowModal = () => dispatch(changeFollowModalState());

  const followingList = useSelector(
    (state) => state.followingList.followingList.followingList
  );
  const followerList = useSelector(
    (state) => state.followerList.followerList.followerList
  );
  const usersList = useSelector((state) => state.userList.userList.data);
  const isFollow = useSelector((state) => state.isFollow.isFollow);

  console.log(followingList);
  return (
    <FollowView
      followerList={followerList}
      followingList={followingList}
      usersList={usersList}
      handleFollow={changeFollowModal}
      isFollow={isFollow}
    />
  );
};

export default ContainerFollowView;
