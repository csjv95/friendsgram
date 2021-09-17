import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import Header from "../Global/Header/Header";
import { changeUploadModalState } from "../redux/modules/modalState";
import { getUnreadAsync } from "../redux/modules/unreadCount";
import { getUserDataAsync } from "../redux/modules/userData";
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

  return (
    <Header
      userData={userData}
      handleUpload={changeUploadModal}
      foregroundMessageCount={unread}
    />
  );
};

export default ContainerHeader;
