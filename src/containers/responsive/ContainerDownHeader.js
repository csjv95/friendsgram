import { useEffect } from "react";
import ResponsiveDownHeader from "../../Global/Header/ResponsiveDownHeader";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router";
import foregroundMessage from "../../service/message/foregroundMessage";
import readCount from "../../service/message/readCount";
import unreadCount from "../../service/message/unreadCount";
import { changeUploadModalState } from "../../redux/modules/modals/modalState";

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

  return (
    <ResponsiveDownHeader
      foregroundMessageCount={unread}
      handleUpload={changeUploadModal}
    />
  );
};

export default ContainerDownHeader;
