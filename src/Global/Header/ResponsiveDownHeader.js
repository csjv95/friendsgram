import React from "react";
import styled from "styled-components";

const ResponsiveDownHeader = () => {
  const DownHeader = styled.header`
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.contentColor};
    z-index: 10000000;
  `;

  return <DownHeader>hello this is DownHeader~!</DownHeader>;
};

export default ResponsiveDownHeader;
