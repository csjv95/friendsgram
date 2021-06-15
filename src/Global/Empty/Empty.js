import React from "react";
import styled from "styled-components";

const StEmty = styled.div`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  margin: -1px;
  clip: rect(0, 0, 0, 0);
  clip-path: polygon(0 0, 0 0, 0 0);
`;

const Empty = () => {
  return <StEmty />;
};

export default Empty;
