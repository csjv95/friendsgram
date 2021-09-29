import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeLocationModalState,
  changePostModalState,
  changeFollowModalState,
  changeSendModalState,
} from "../redux/modules/modals/modalState";
import { barState } from "../redux/modules/progressBar/progressBar";
import LoadingPage from "../Global/Loading/LoadingPage";
import Main from "../componet/Main/Main";

const ContainerMain = () => {
  const dispatch = useDispatch();

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
  } = useSelector((state) => ({
    uploadModal: state.modalState.uploadModal,
    locationModal: state.modalState.locationModal,
    postModal: state.modalState.postModal,
    followModal: state.modalState.followModal,
    sendModal: state.modalState.sendModal,
    progressState: state.progressBar.progressState,
  }));

  const {
    data: userData,
    loading: userDataLoading,
    error: userDataError,
  } = useSelector((state) => state.userData.userData);

  if (userDataError) return <div>{userDataError}</div>;
  // loading true
  if (userDataLoading) return <LoadingPage />;
  // no data
  if (!userData) return <div>데이터가 존재하지 않음</div>;
  // data

  return (
    <Main
      uploadModal={uploadModal}
      locationModal={locationModal}
      postModal={postModal}
      followModal={followModal}
      sendModal={sendModal}
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

export default ContainerMain;
