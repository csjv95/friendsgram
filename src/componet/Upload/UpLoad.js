import React, { useState } from "react";
import { StMainRouterSection } from "../../Global/StMainRouterSection/StMainRouterSection";

const UpLoad = () => {
  const [upLoadFile, setUpLoadFile] = useState();

  const handleChange = (event) => {
    const file = event.target.value;
    setUpLoadFile(file);
  };

  const handleSubmit = () => {
    
  }

  return (
    <StMainRouterSection >
      <form action="#" onSubmit={handleSubmit}>
        <input type="file" name="uploadpic" onChange={handleChange} />
        <div>{upLoadFile}</div>
        <button>up load</button>
      </form>
    </StMainRouterSection>
  );
};

export default UpLoad;
