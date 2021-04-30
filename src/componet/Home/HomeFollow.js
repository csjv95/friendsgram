import React, { useState } from "react";
import styled from "styled-components";
import Profiles from "./Profiles";
import { NavLink } from "react-router-dom";
import { firebaseAuth } from "../../service/firebase";
import setFollow from "../../service/follow/setFollow";

const FollowList = styled.ul`
  position: fixed;
`;

const FollowRecomend = styled.li`
  margin: 2em 0 1em 0;
  display: flex;
  justify-content: space-between;
`;

const RecomendText = styled.div`
  font-size: 0.8em;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textColorLihgtgrey};
`;

const RecomendBtn = styled.button`
  font-weight: 600;
`;

const HomeFollow = ({ userData, usersList, followingList }) => {
  const { displayName, photoURL, name } = userData;
  const [isFollowing, setIsFollowing] = useState("");

  const onLogout = () => {
    firebaseAuth.signOut();
  };

  const onBtnClick = (event) => {
    const targetUser = event.target.parentNode.dataset.uid;
    setFollow(targetUser,followingList);
    //followingList.map((followingUser) =>
      //followingUser === targetUser ? "팔로잉" : "팔로우"
    //);
  };

  return (
    <FollowList>
      {console.log(followingList)}
      <Profiles
        imgHeight="4em"
        btnText="logout"
        photoURL={photoURL}
        displayName={displayName}
        onBtnClick={onLogout}
        name={name}
        followingList={followingList}
      />
      <FollowRecomend>
        <RecomendText>회원님을 위한 추천</RecomendText>
        <NavLink to="/suggest">
          <RecomendBtn>모두 보기</RecomendBtn>
        </NavLink>
      </FollowRecomend>
      {usersList.slice(0, 4).map((user) => (
        <Profiles
          key={user.uid}
          imgHeight="2em"
          btnText={isFollowing ? "팔로잉" : "팔로우"}
          photoURL={user.photoURL}
          displayName={user.displayName}
          name={user.name}
          onBtnClick={onBtnClick}
          uid={user.uid}
          followingList={followingList}
        />
      ))}
    </FollowList>
  );
};
export default HomeFollow;
