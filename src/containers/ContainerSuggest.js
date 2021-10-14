import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Suggest from "../componet/Suggest/Suggest";
import LoadingPage from "../Global/Loading/LoadingPage";
import getUsersList from "../service/fireStore/getUsersList";
import getFollowingList from "../service/follow/getFollowingList";
import { Theme } from "../style/Theme";

const ContainerSuggest = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const USERLIST_SUCCESS = "userList/USERLIST_SUCCESS";
    const FOLLOWINGLIST_SUCCESS = "followingList/FOLLOWINGLIST_SUCCESS";

    getUsersList(dispatch, USERLIST_SUCCESS);
    getFollowingList(dispatch, FOLLOWINGLIST_SUCCESS);
  }, [dispatch]);

  const {
    loading: userListLoading,
    data: usersList,
    error: userListError,
  } = useSelector((state) => state.userList.userList);

  const followingList = useSelector(
    (state) => state.followingList.followingList.followingList
  );

  if (userListLoading) return <LoadingPage />;
  if (userListError) return <div>{userListError}</div>;
  if (!usersList) return <LoadingPage />;

  return (
    <Suggest
      usersList={usersList}
      followingList={followingList}
      StSectionPaddingTop="4em"
      StSectionBackgroundColor={Theme.colors.backgroundColor}
    />
  );
};

export default ContainerSuggest;
