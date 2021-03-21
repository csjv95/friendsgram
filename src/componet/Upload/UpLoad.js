import React, { useState } from "react";
import styled from "styled-components";

const UpLoadSection = styled.section`
  flex-grow: 1;
  margin-top: 4em;
  display: flex;
  flex-wrap: wrap;
`;

const UpLoad = () => {
  const [upLoadFile, setUpLoadFile] = useState();

  const handleChange = (event) => {
    const file = event.target.value;
    setUpLoadFile(file);
  };

  const handleSubmit = () => {
    
  }

  return (
    <UpLoadSection >
      <form action="#" onSubmit={handleSubmit}>
        <input type="file" name="uploadpic" onChange={handleChange} />
        <div>{upLoadFile}</div>
        <button>up load</button>
      </form>
    </UpLoadSection>
  );
};

export default UpLoad;
