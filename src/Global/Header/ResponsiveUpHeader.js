import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { StSendIcon } from "../StIcon/StIcon";
import { StHeaderLogo } from "./Header";

const ResponsiveUpHeader = () => {
  const StUpHeader = styled.header`
    width: 100%;
    padding: 0.5em;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
    margin-bottom: 4em;
    background-color: ${({ theme }) => theme.colors.contentColor};
    z-index: 100;
  `;

  const StUpDirect = styled(NavLink)`
    display: flex;
    align-content: flex-end;
  `;

  return (
    <StUpHeader>
      <StHeaderLogo href="/" width="100%" textAlign="center">
        Friendsgram
      </StHeaderLogo>
      <StUpDirect to="direct">
        <StSendIcon width="1.5" />
      </StUpDirect>
    </StUpHeader>
  );
};

export default ResponsiveUpHeader;
