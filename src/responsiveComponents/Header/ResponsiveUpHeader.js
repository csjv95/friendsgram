import React from "react";
import styled from "styled-components";
import { StHeaderLogo } from "../../Global/Logo/StHeaderLogo";
import { StProfileImg } from "../../Global/StProfileImg/StProfileImg";
import StButton from "../../Global/StButton/StButton";
import { StSettings } from "../../Global/StIcon/StIcon";
// import { StRectangle, StTriangle } from "../../Global/StBubbleChat/BubbleChat";
// import { Theme } from "../../style/Theme";
// import { StLink, StMyLi, StMyUl } from "../../Global/Header/Header";

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

const StProfile = styled.div`
  height: 2em;
  display: flex;
  align-content: flex-end;
`;

const ResponsiveUpHeader = ({
  location,
  photoURL,
  handleMobileEditMenu,
  changeMobileProfileMenu,
}) => {
  return (
    <StUpHeader display="flex">
      {location.includes("/edit") && (
        <StButton
          btnText={<StSettings width="1.5em" onClick={handleMobileEditMenu} />}
        />
      )}
      <div style={{ width: "100%", textAlign: "center" }}>
        <StHeaderLogo href="/">Friendsgram</StHeaderLogo>
      </div>
      <StProfile>
        <StProfileImg
          src={photoURL}
          alt="my"
          height="100%"
          onClick={changeMobileProfileMenu}
        />
      </StProfile>
    </StUpHeader>
  );
};

export default ResponsiveUpHeader;
