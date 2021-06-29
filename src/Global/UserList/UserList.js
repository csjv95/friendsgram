import React, { useEffect } from "react";
import Profiles from "../../componet/Home/Profiles";
import setFollow from "../../service/follow/setFollow";
import { Theme } from "../../style/Theme";
import { StItem } from "../../Global/StList/StList";

const UserList = ({ followingList, userData }) => {
  
  useEffect(()=> {
    console.log("userData",userData)
  },[userData])

  const followBtnClick = async (event) => {
    const targetUser = event.target.parentNode.dataset.uid;
    await setFollow(targetUser, followingList);
  };

  return (
    <StItem>
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
            btnText={followingList.includes(user.uid) ? "언팔로우" : "팔로우"}
          />
          ))}
    </StItem>
  );
};

export default UserList;
