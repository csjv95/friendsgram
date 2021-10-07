import React, { useState } from "react";
import styled from "styled-components";
import { StRectangle, StTriangle } from "../StBubbleChat/BubbleChat";
import { useSelector } from "react-redux";
import { StHeaderLogo } from "../Logo/StHeaderLogo";
import { StProfileImg } from "../StProfileImg/StProfileImg";
import {
  StBookmarkIcon,
  StLine,
  StSettings,
  StTransfer,
  StUserCircle,
} from "../StIcon/StIcon";
import StButton from "../StButton/StButton";
import { authLogout } from "../../service/auth/authLogout";
import { Theme } from "../../style/Theme";
import { StLink, StMyLi, StMyUl } from "./Header";

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

const ResponsiveUpHeader = () => {
  const [profile, setProfile] = useState(false);

  const photoURL = useSelector(
    (state) => state.userData.userData.data.photoURL
  );

  const displayName = useSelector(
    (state) => state.userData.userData.data.displayName
  );

  const profiles = [
    {
      icon: <StUserCircle width="1.5" />,
      text: "프로필",
      index: 0,
      to: `/${displayName}`,
    },
    {
      icon: <StBookmarkIcon width="1.5" />,
      text: "저장됨",
      index: 1,
      to: `/${displayName}/saved`,
    },
    { icon: <StSettings width="1.5" />, text: "설정", index: 2, to: "/edit" },
    { icon: <StTransfer width="1.5" />, text: "계정전환 (준비중)", index: 3 },
    { text: "로그아웃", index: 4 },
  ];

  const profileOnClick = () => {
    setProfile(!profile);
  };

  const onLogout = () => {
    authLogout();
  };

  return (
    <StUpHeader>
      <StHeaderLogo href="/" width="100%" textAlign="center">
        Friendsgram
      </StHeaderLogo>
      <StProfile>
        <StProfileImg
          src={photoURL}
          alt="my"
          height="100%"
          onClick={profileOnClick}
        />
      </StProfile>

      {profile && (
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
                    <StButton btnText={item.icon} />
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
      )}
    </StUpHeader>
  );
};

export default ResponsiveUpHeader;
