import React, { useState } from "react";
import { StMainRouterSection } from "../../Global/StMainRouterSection/StMainRouterSection";
import uploadData from "../../service/routeData/uploadData";
import { firebaseStorage } from "../../service/firebase";
const UpLoad = () => {
  const [upLoadFile, setUpLoadFile] = useState("");

  const handleChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setUpLoadFile(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    uploadData(upLoadFile);
  };

  return (
    <StMainRouterSection>
      <form action="#" onSubmit={handleSubmit}>
        <input type="file" name="uploadpic" onChange={handleChange} />
        <button>up load</button>
      </form>
    </StMainRouterSection>
  );
};

export default UpLoad;
