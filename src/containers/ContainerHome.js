import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Home from "../componet/Home/Home";
import LoadingPage from "../Global/Loading/LoadingPage";
import {
  changePostModalState,
  changeSendModalState,
} from "../redux/modules/modals/modalState";
import { clickedPostUid, clickedPostId } from "../redux/modules/post/clickPost";
import getCurrentUserData from "../service/fireStore/getCurrentUserData";
import getUsersList from "../service/fireStore/getUsersList";
import getFollowingList from "../service/follow/getFollowingList";

const ContainerHome = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const GET_USER_DATA_SUCCESS = "userData/GET_USER_DATA_SUCCESS";
    const USERLIST_SUCCESS = "userList/USERLIST_SUCCESS";
    const FOLLOWINGLIST_SUCCESS = "followingList/FOLLOWINGLIST_SUCCESS";

    getCurrentUserData(dispatch, GET_USER_DATA_SUCCESS);
    getUsersList(dispatch, USERLIST_SUCCESS);
    getFollowingList(dispatch, FOLLOWINGLIST_SUCCESS);
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
      setClickedPostId={setClickedPostId} //이것들은 데이터 표시를 바꿔줘야함 지금은 저장만한거임
      setClickedPostUid={setClickedPostUid} //
      changeSendModal={changeSendModal}
    />
  );
};

export default ContainerHome;
