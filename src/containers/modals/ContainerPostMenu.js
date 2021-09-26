import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostMenu from "../../componet/PostMenu/PostMenu";
import { changePostModalState } from "../../redux/modules/modals/modalState";
import { authGetUid } from "../../service/auth/authGetUid";

const ContainerPostMenu = () => {
  const dispatch = useDispatch();

  const changePostModal = () => dispatch(changePostModalState());

  useEffect(() => {
    const CURRENTUID = "getUid/CURRENTUID";
    authGetUid(dispatch, CURRENTUID);
  }, [dispatch]);

  const currentUserUid = useSelector(
    (state) => state.currentUserUid.currentUserUid
  );
  const clickedPostId = useSelector((state) => state.clickPost.clickPostId);
  const clickedPostUid = useSelector((state) => state.clickPost.clickPostUid);

  return (
    <PostMenu
      handlePostMenu={changePostModal}
      currentUserUid={currentUserUid}
      clickedPostId={clickedPostId}
      clickedPostUid={clickedPostUid}
    />
  );
};

export default ContainerPostMenu;
