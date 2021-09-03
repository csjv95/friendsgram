import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  changeUploadModal,
  changeLocationModal,
  changePostModal,
  changeFollowModal,
  changeSendModal,
} from "../redux/modules/modalState";
import RouteMain from "../routes/routeMain/routeMain";

const ContainerRouteMain = () => {
  const { upload, location, post, follow, send } = useSelector(
    (state) => ({
      upload: state.modalState.upload,
      location: state.modalState.location,
      post: state.modalState.post,
      follow: state.modalState.follow,
      send: state.modalState.send,
    }),
    shallowEqual // useSelector 최적화 방식 1. 한개씩 작성 2. shallowEqaul사용하여 shallow비교
  );

  const dispatch = useDispatch();
  const uploadModalChange = () => dispatch(changeUploadModal());
  const locationModalChange = () => dispatch(changeLocationModal());
  const postModalChange = () => dispatch(changePostModal());
  const followModalChange = () => dispatch(changeFollowModal());
  const sendModalChange = () => dispatch(changeSendModal());

  return (
    <RouteMain
      uploadModal={upload}
      locationModal={location}
      postModal={post}
      followModal={follow}
      sendModal={send}
      uploadModalChange={uploadModalChange}
      locationModalChange={locationModalChange}
      postModalChange={postModalChange}
      followModalChange={followModalChange}
      sendModalChange={sendModalChange}
    />
  );
};

export default ContainerRouteMain;
