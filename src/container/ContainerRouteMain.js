import React from "react";
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

const ContainerRouteMain = () => {
  const dispatch = useDispatch();

  const {
    uploadModal,
    locationModal,
    postModal,
    followModal,
    sendModal,
    progressState,
  } = useSelector((state) => ({
    uploadModal: state.modalState.uploadModal,
    locationModal: state.modalState.locationModal,
    postModal: state.modalState.postModal,
    followModal: state.modalState.followModal,
    sendModal: state.modalState.sendModal,
    progressState: state.progressBar.progressState,
  }));

  const changeUploadModal = () => dispatch(changeUploadModalState());
  const changeLocationModal = () => dispatch(changeLocationModalState());
  const changePostModal = () => dispatch(changePostModalState());
  const changeFollowModal = () => dispatch(changeFollowModalState());
  const changeSendModal = () => dispatch(changeSendModalState());
  const changeBarState = (bar) => dispatch(barState(bar));

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
    />
  );
};

export default ContainerRouteMain;
