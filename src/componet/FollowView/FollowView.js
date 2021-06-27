import React, { useEffect, useState } from "react";
import { StItem, StList } from "../../Global/StList/StList";
import { StModalContainer, StModalMain } from "../../Global/StModal/StModal";
import { Theme } from "../../style/Theme";
import Profiles from "../../componet/Home/Profiles";
import getUsersData from "../../service/usersData/getUsersData";
import setFollow from "../../service/follow/setFollow";
import StButton from "../../Global/StButton/StButton";
import { StClear } from "../../Global/StIcon/StIcon";
import UserList from "../../Global/UserList/UserList";
const FollowView = ({ followerList, followingList, handleFollow }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getUsersData(followingList, setUserData);
  }, [followingList]);
  console.log("userData1",userData)
  return (
    <StModalContainer
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <StModalMain
        width="25em"
        height="auto"
        display="flex"
        borderRadius={Theme.borders.modalRadius}
        bgColor={Theme.colors.contentColor}
      >
        {/* following or follower */}
        <StList width="100%" padding="1em">
          <StItem display="flex" justifyContent="space-around">
            <h1>팔로우</h1>
            <StButton
              onClick={handleFollow}
              width="3em"
              btnText={<StClear width="2em" />}
            />
          </StItem>
          <UserList userData={userData} followingList={followingList} />
        </StList>
      </StModalMain>
    </StModalContainer>
  );
};

export default FollowView;
