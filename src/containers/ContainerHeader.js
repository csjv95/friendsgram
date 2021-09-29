import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import Header from "../Global/Header/Header";
import LoadingPage from "../Global/Loading/LoadingPage";
import { changeUploadModalState } from "../redux/modules/modals/modalState";
import foregroundMessage from "../service/message/foregroundMessage";
import readCount from "../service/message/readCount";
import unreadCount from "../service/message/unreadCount";
import getCurrentUserData from "../service/fireStore/getCurrentUserData";

const ContainerHeader = () => {
  const dispatch = useDispatch();
  const path = useLocation().pathname;

  useEffect(() => {
    const UNREAD_SUCCESS = "unreadCount/UNREAD_SUCCESS";
    const GET_USER_DATA_SUCCESS = "userData/GET_USER_DATA_SUCCESS";

    getCurrentUserData(dispatch, GET_USER_DATA_SUCCESS);
    unreadCount(dispatch, UNREAD_SUCCESS);
    foregroundMessage(path);
    readCount(path);
  }, [dispatch, path]);

  const {
    data: userData,
    loading: userDataLoading,
    error: userDataError,
  } = useSelector((state) => state.userData.userData);

  const changeUploadModal = () => dispatch(changeUploadModalState());

  const { loading: unreadLoading, unread } = useSelector(
    (state) => state.unread.unread
  );

  if (userDataLoading) return <LoadingPage />;
  if (userDataError) return <div>{userDataError}</div>;
  if (unreadLoading) return <LoadingPage />;

  return (
    <Header
      userData={userData}
      handleUpload={changeUploadModal}
      foregroundMessageCount={unread}
    />
  );
};

export default ContainerHeader;
