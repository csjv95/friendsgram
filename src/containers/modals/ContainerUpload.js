import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Upload from "../../componet/Upload/Upload";
import {
  changeUploadModalState,
  changeLocationModalState,
} from "../../redux/modules/modals/modalState";
import { barState } from "../../redux/modules/progressBar/progressBar";

const ContainerUpload = ({ location, setLocation }) => {
  const dispatch = useDispatch();
  const [imgs, setImgs] = useState([]);
  const [text, setText] = useState("");
  const [noComments, setNoComments] = useState(false);

  const changeUploadModal = () => dispatch(changeUploadModalState());
  const changeLocationModal = () => dispatch(changeLocationModalState());
  const changeBarState = (bar) => dispatch(barState(bar));

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
