import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import StButton from "../../Global/StButton/StButton";
import { StCloseIcon } from "../../Global/StIcon/StIcon";
import { StModalContainer } from "../../Global/StModal/StModal";
import { Theme } from "../../style/Theme";

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

const StLink = styled(Link)`
  display: flex;
  justify-content: space-between;
`;

const MobileMenu = ({ handleMobileMenu, list }) => {
  return (
    <StModalContainer
      width="100%"
      height="100%"
      display="flex"
      flexDirectioin="column"
      bgColor={Theme.colors.backgroundColor}
      postModal={Theme.colors.backgroundColor}
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
            <StMobileItem key={item.index} >
              <StLink to={item.to ? item.to : "/"} onClick={item.onClick && item.onClick}>
                {item.icon}
                {item.text} 
              </StLink>
            </StMobileItem>
          ))}
        </StMobileList>
      </StMobileMenuMain>
    </StModalContainer>
  );
};

export default MobileMenu;
