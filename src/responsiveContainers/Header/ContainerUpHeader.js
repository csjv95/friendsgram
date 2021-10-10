import React, { useState } from "react";
import { useSelector } from "react-redux";
import ResponsiveUpHeader from "../../responsiveComponents/Header/ResponsiveUpHeader";
import { useLocation } from "react-router-dom";
import { authLogout } from "../../service/auth/authLogout";
import {
  StBookmarkIcon,
  StSettings,
  StTransfer,
  StUserCircle,
} from "../../Global/StIcon/StIcon";

const ContainerUpHeader = () => {
  const [profile, setProfile] = useState(false);

  const location = useLocation().pathname;

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
    <ResponsiveUpHeader
      profile={profile}
      location={location}
      profiles={profiles}
      photoURL={photoURL}
      profileOnClick={profileOnClick}
      onLogout={onLogout}
    />
  );
};

export default ContainerUpHeader;
