import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import Header from "../Global/Header/Header";
import LoadingPage from "../Global/Loading/LoadingPage";
import { changeUploadModalState } from "../redux/modules/modals/modalState";
import { getUnreadAsync } from "../redux/modules/message/unreadCount";
import foregroundMessage from "../service/message/foregroundMessage";
import readCount from "../service/message/readCount";

const ContainerHeader = () => {
  // handleupload , userData , foregroundMessageCount
  const dispatch = useDispatch();
  const path = useLocation().pathname;

  // useEffect로 userData 가져오기

  useEffect(() => {
    const unread = () => dispatch(getUnreadAsync());
    foregroundMessage(path);
    readCount(path);

    return () => {
      unread();
    };
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
