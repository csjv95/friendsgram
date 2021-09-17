import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Home from "../componet/Home/Home";
import { getUserListAsync } from "../redux/modules/userList";
import LoadingPage from "../Global/Loading/LoadingPage";
import { changePostModalState } from "../redux/modules/modalState";

const ContainerHome = ({
  followingList,
  currentUserUid,
  setClickedPostId,
  setClickedPostUid,
  handleSend,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserList = () => dispatch(getUserListAsync());
    getUserList();
  }, [dispatch]);

  const changePostModal = () => dispatch(changePostModalState());

  const userData = useSelector((state) => state.userData.userData.data);
  const {
    loading,
    data: usersList,
    error,
  } = useSelector((state) => state.userList.userList);

  if (loading) return <LoadingPage />;
  if (error) return <div>{error}</div>;

  return (
    <Home
      userData={userData}
      usersList={usersList}
      followingList={followingList}
      currentUserUid={currentUserUid}
      handlePostMenu={changePostModal}
      setClickedPostId={setClickedPostId}
      setClickedPostUid={setClickedPostUid}
      handleSend={handleSend}
    />
  );
};

export default ContainerHome;
