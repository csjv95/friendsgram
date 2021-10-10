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
  profile,
  profiles,
  profileOnClick,
  onLogout,
  location,
  photoURL,
  handleMobileEditMenu,
  handleMobileProfileMen,
}) => {
  return (
    <StUpHeader>
      {location.includes("/edit") && (
        <StButton
          btnText={<StSettings width="1.5em" onClick={handleMobileEditMenu} />}
        />
      )}
      <StHeaderLogo href="/" width="100%" textAlign="center">
        Friendsgram
      </StHeaderLogo>
      <StProfile>
        <StProfileImg
          src={photoURL}
          alt="my"
          height="100%"
          onClick={handleMobileProfileMen}
        />
      </StProfile>

      {/* {profile && (
        <>
          <StTriangle
            top="2.7em"
            right="0.8em"
            borderTop="1em solid none"
            borderBottom={`0.5em solid ${Theme.colors.contentColor}`}
            borderLeft="0.5em solid transparent;"
            borderRight="0.5em solid transparent;"
          />
          <StRectangle top="3em" right="0" width="13em" height="auto">
            {profiles.map((item) => (
              <StMyUl key={item.index} onClick={profileOnClick}>
                <StMyLi>
                  <StLink to={item.to ? item.to : "/"}>
                    <StButton btnText={item.icon} refontSize="0.5em" />
                    {item.index === 4 ? (
                      <StButton
                        width="100%"
                        btnText={item.text}
                        fontWeight="600"
                        onClick={onLogout}
                      />
                    ) : (
                      <StButton btnText={item.text} fontWeight="600" />
                    )}
                  </StLink>
                </StMyLi>
                {item.index === 3 && <StLine />}
              </StMyUl>
            ))}
          </StRectangle>
        </>
      )} */}
    </StUpHeader>
  );
};

export default ResponsiveUpHeader;
