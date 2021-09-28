import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Upload from "../../componet/Upload/Upload";
import {
  changeUploadModalState,
  changeLocationModalState,
} from "../../redux/modules/modals/modalState";
import { barState } from "../../redux/modules/progressBar/progressBar";
import { changeLocation } from "../../redux/modules/location/location";

const ContainerUpload = () => {
  const dispatch = useDispatch();
  const [imgs, setImgs] = useState([]);
  const [text, setText] = useState("");
  const [noComments, setNoComments] = useState(false);

  const location = useSelector((state) => state.location.location);

  const changeUploadModal = () => dispatch(changeUploadModalState());
  const changeLocationModal = () => dispatch(changeLocationModalState());
  const changeBarState = (bar) => dispatch(barState(bar));
  const setLocation = (location) => dispatch(changeLocation(location));

  return (
    <Upload
      imgs={imgs}
      text={text}
      location={location}
      noComments={noComments}
      setImgs={setImgs}
      setText={setText}
      setLocation={setLocation}
      setNoComments={setNoComments}
      handleLocation={changeLocationModal}
      handleUpload={changeUploadModal}
      changeBarState={changeBarState}
    />
  );
};

export default ContainerUpload;
