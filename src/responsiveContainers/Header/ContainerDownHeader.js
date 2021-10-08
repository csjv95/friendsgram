import { useEffect } from "react";
import ResponsiveDownHeader from "../../responsiveComponents/Header/ResponsiveDownHeader";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router";
import foregroundMessage from "../../service/message/foregroundMessage";
import readCount from "../../service/message/readCount";
import unreadCount from "../../service/message/unreadCount";
import {
  changeSearchModalState,
  changeUploadModalState,
} from "../../redux/modules/modals/modalState";

const ContainerDownHeader = () => {
  const dispatch = useDispatch();
  const path = useLocation().pathname;

  useEffect(() => {
    const UNREAD_SUCCESS = "unreadCount/UNREAD_SUCCESS";

    unreadCount(dispatch, UNREAD_SUCCESS);
    foregroundMessage(path);
    readCount(path);
  }, [dispatch, path]);

  const { unread } = useSelector((state) => state.unread.unread);

  const changeUploadModal = () => dispatch(changeUploadModalState());
  const changeSearchModal = () => dispatch(changeSearchModalState());

  return (
    <ResponsiveDownHeader
      foregroundMessageCount={unread}
      handleUpload={changeUploadModal}
      handleSearch={changeSearchModal}
    />
  );
};

export default ContainerDownHeader;
