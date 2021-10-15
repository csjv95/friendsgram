import React, { useState ,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import ResponsiveUpHeader from "../../responsiveComponents/Header/ResponsiveUpHeader";
import { useLocation } from "react-router-dom";
import { authLogout } from "../../service/auth/authLogout";
import {
  StBookmarkIcon,
  StKey,
  StLogOut,
  StSettings,
  StTransfer,
  StUserCircle,
} from "../../Global/StIcon/StIcon";
import { changeMobileMenuModalState } from "../../redux/modules/modals/modalState";
import getCurrentUserData from "../../service/fireStore/getCurrentUserData";

const ContainerUpHeader = () => {
  const [profile, setProfile] = useState(false);
  const location = useLocation().pathname;
  const dispatch = useDispatch();
  
  useEffect(()=> {
    const GET_USER_DATA_SUCCESS = "userData/GET_USER_DATA_SUCCESS";
    
    getCurrentUserData(dispatch,GET_USER_DATA_SUCCESS)
  },[dispatch])

  const photoURL = useSelector(
    (state) => state.userData.userData.data.photoURL
  );

  const displayName = useSelector(
    (state) => state.userData.userData.data.displayName
  );

  const onLogout = () => {
    authLogout();
  };

  const editMenuList = [
    { icon: <StSettings width="1.5" />, text: "edit", index: 0, to: "/edit" },
    {
      icon: <StKey width="1.5" />,
      text: `change pw`,
      index: 1,
      to: "/edit/password/change",
    },
  ];

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
    { icon: <StLogOut width="1.5" />, text: "로그아웃", index: 4 ,onClick : onLogout},
  ];

  const changeMobileEditMenu = () =>
    dispatch(changeMobileMenuModalState(editMenuList));

  const changeMobileProfileMenu = () =>
    dispatch(changeMobileMenuModalState(profiles));

  const profileOnClick = () => {
    setProfile(!profile);
  };


  return (
    <ResponsiveUpHeader
      profile={profile}
      location={location}
      profiles={profiles}
      photoURL={photoURL}
      profileOnClick={profileOnClick}
      onLogout={onLogout}
      handleMobileEditMenu={changeMobileEditMenu}
      changeMobileProfileMenu={changeMobileProfileMenu}
    />
  );
};

export default ContainerUpHeader;
