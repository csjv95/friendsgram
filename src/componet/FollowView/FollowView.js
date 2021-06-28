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

  useEffect(() => {
    console.log("userData", userData);
  }, [userData]);

  const followBtnClick = async (event) => {
    const targetUser = event.target.parentNode.dataset.uid;
    await setFollow(targetUser, followingList);
  };

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
          {/* <UserList userData={userData} followingList={followingList} /> */}
          {userData &&
            userData.map((user) => (
              <Profiles
                key={user.uid}
                displayName={user.displayName}
                photoURL={user.photoURL}
                imgHeight="2em"
                name={user.name}
                uid={user.uid}
                btnPadding="0.5em 1em"
                btnBgColor={Theme.colors.contentColor}
                btnBorder={`1px solid ${Theme.colors.borderColor}`}
                onBtnClick={followBtnClick}
                btnText={
                  followingList.includes(user.uid) ? "언팔로우" : "팔로우"
                }
              />
            ))}
        </StList>
      </StModalMain>
    </StModalContainer>
  );
};

export default FollowView;
