import React from "react";
import styled from "styled-components";

const StProgressBar = styled.progress`
  position: fixed;
  top: 0;
  width: 100%;
  height: 0.4em;
  z-index: 200;
`;

const ProgressBar = ({ progressState }) => {
  return (
    <>
      <StProgressBar max="100" value={progressState} />
    </>
  );
};

export default ProgressBar;
