import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import StButton from "../../Global/StButton/StButton";
import { StCloseIcon } from "../../Global/StIcon/StIcon";
import { StModalContainer } from "../../Global/StModal/StModal";

const StMobileMenuMain = styled.main`
  padding-top: 3em;
`;

const StTitle = styled.h1`
  padding-top: 1em;
  font-weight: 600;
  text-align: center;
`;

const StMobileList = styled.ul`
  width: 100%;
`;

const StMobileItem = styled.li`
  padding: 1em;
  font-weight: 600;

  :first-child {
    border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
  }

  :nth-child(n) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.contentColor};
  }
`;

const MobileMenu = ({ handleMobileMenu, list }) => {
  return (
    <StModalContainer
      width="100%"
      height="100%"
      display="flex"
      flexDirectioin="column"
    >
      <StTitle>옵션</StTitle>
      <StButton
        position="absolute"
        top="0"
        right="0"
        padding="1em"
        btnText={<StCloseIcon width="1.5em" />}
        onClick={handleMobileMenu}
      />

      <StMobileMenuMain style={{ paddingTop: "3em" }}>
        <StMobileList onClick={handleMobileMenu}>
          {list.map((item) => (
            <StMobileItem key={item.index}>
              <Link to={item.link}>{item.text}</Link>
            </StMobileItem>
          ))}
        </StMobileList>
      </StMobileMenuMain>
    </StModalContainer>
  );
};

export default MobileMenu;
