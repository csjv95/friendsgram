import React from "react";
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

const HomeFollow = ({ userData, usersList }) => {
  const { displayName, photoURL, name } = userData;

  const onLogout = () => {
    firebaseAuth.signOut();
  };

  const onBtnClick = (event) => {
    const targetUser = event.target.parentNode.dataset.uid;
    setFollow(targetUser);
    const currentText = event.target;
    currentText.innerText="팔로잉";
 }

  return (
    <FollowList>
      <Profiles
        imgHeight="4em"
        btnText="logout"
        photoURL={photoURL}
        displayName={displayName}
        onBtnClick={onLogout}
        name={name}
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
          btnText="팔로우"
          photoURL={user.photoURL}
          displayName={user.displayName}
          name={user.name}
          onBtnClick={onBtnClick}
          uid={user.uid}
        />
      ))}
    </FollowList>
  );
};
export default HomeFollow;
