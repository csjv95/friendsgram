import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeUploadModalState,
  changeLocationModalState,
  changePostModalState,
  changeFollowModalState,
  changeSendModalState,
} from "../redux/modules/modalState";
import { barState } from "../redux/modules/progressBar";
import RouteMain from "../routes/routeMain/routeMain";
import { getUserDataAsync } from "../redux/modules/userData";

const ContainerRouteMain = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserData = () => dispatch(getUserDataAsync());
    getUserData();

    return () => {
      getUserData();
    };
  }, [dispatch]);

  const changeUploadModal = () => dispatch(changeUploadModalState());
  const changeLocationModal = () => dispatch(changeLocationModalState());
  const changePostModal = () => dispatch(changePostModalState());
  const changeFollowModal = () => dispatch(changeFollowModalState());
  const changeSendModal = () => dispatch(changeSendModalState());
  const changeBarState = (bar) => dispatch(barState(bar));

  const {
    uploadModal,
    locationModal,
    postModal,
    followModal,
    sendModal,
    progressState,
    // userData,
  } = useSelector((state) => ({
    uploadModal: state.modalState.uploadModal,
    locationModal: state.modalState.locationModal,
    postModal: state.modalState.postModal,
    followModal: state.modalState.followModal,
    sendModal: state.modalState.sendModal,
    progressState: state.progressBar.progressState,
    // userData: state.userData.userData.data,
  }));

  const {
    data: userData,
    loading,
    error,
  } = useSelector((state) => state.userData.userData);

  if (error) return <div>{error}</div>;
  // loading true
  if (loading)
    return <div style={{ width: "100rem", height: "500rem" }}>로딩중</div>;
  // no data
  if (!userData) return <div>데이터가 존재하지 않음</div>;
  // data

  return (
    <RouteMain
      uploadModal={uploadModal}
      locationModal={locationModal}
      postModal={postModal}
      followModal={followModal}
      sendModal={sendModal}
      changeUploadModal={changeUploadModal}
      changeLocationModal={changeLocationModal}
      changePostModal={changePostModal}
      changeFollowModal={changeFollowModal}
      changeSendModal={changeSendModal}
      progressState={progressState}
      changeBarState={changeBarState}
      userData={userData}
    />
  );
};

export default ContainerRouteMain;
