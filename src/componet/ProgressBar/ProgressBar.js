import React from "react";
import styled from "styled-components";

const StProgressBar = styled.progress`
`;

const ProgressBar = () => {
  return (
      <StProgressBar max="100" value="70" />
  );
};

export default ProgressBar;
