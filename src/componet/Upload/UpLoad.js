import React, { useState } from "react";
import { StMainRouterSection } from "../../Global/StMainRouterSection/StMainRouterSection";
import uploadData from "../../service/routeData/uploadData";

const UpLoad = () => {
  const [upLoadFile, setUpLoadFile] = useState("");
  // const [showImg, setShowImg] = useState({ imgUrl: "" });

  const handleChange = async (event) => {
    // let reader = new FileReader();
    const fileList = event.target.files[0];
    setUpLoadFile(fileList);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    uploadData(upLoadFile); //,setShowImg
  };

  return (
    <StMainRouterSection>
      <h2>Upload file</h2>
      <form action="#" onSubmit={handleSubmit}>
        <input type="file" multiple name="uploadpic" onChange={handleChange} />
        <button>up load</button>
      <img src={uploadData} alt="pic" />
      </form>
    </StMainRouterSection>
  );
};

export default UpLoad;
