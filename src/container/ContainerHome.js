import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Home from "../componet/Home/Home";
import { getUserListAsync } from "../redux/modules/userList";
import LoadingPage from "../Global/Loading/LoadingPage";
import { changePostModalState } from "../redux/modules/modalState";
import { getFollowingListAsync } from "../redux/modules/followingList";
import { clickedPostUid, clickedPostId } from "../redux/modules/clickPost";
import { changeSendModalState } from "../redux/modules/modalState";

const ContainerHome = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserList = () => dispatch(getUserListAsync());
    const getFollowingList = () => dispatch(getFollowingListAsync());

    getUserList();
    getFollowingList();
  }, [dispatch]);

  const changePostModal = () => dispatch(changePostModalState());
  const setClickedPostId = (postId) => dispatch(clickedPostId(postId));
  const setClickedPostUid = (postUid) => dispatch(clickedPostUid(postUid));
  const changeSendModal = () => dispatch(changeSendModalState());
  const userData = useSelector((state) => state.userData.userData.data);

  const { loading, followingList, error } = useSelector(
    (state) => state.followingList.followingList
  );

  const {
    loading: userListLoading,
    data: usersList,
    error: userListError,
  } = useSelector((state) => state.userList.userList);

  if (loading) return <LoadingPage />;
  if (userListLoading) return <LoadingPage />;
  if (userListError) return <div>{error}</div>;
  if (!followingList) return <LoadingPage />;

  return (
    <Home
      userData={userData}
      usersList={usersList}
      followingList={followingList}
      handlePostMenu={changePostModal}
      setClickedPostId={setClickedPostId}
      setClickedPostUid={setClickedPostUid}
      changeSendModal={changeSendModal}
    />
  );
};

export default ContainerHome;
