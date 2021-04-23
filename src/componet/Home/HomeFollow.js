import React from "react";
import styled from "styled-components";
import Profiles from "./Profiles";

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

const HomeFollow = ({ userData }) => {
  const { displayName, photoURL, name } = userData;

  return (
    <FollowList>
      <Profiles
        imgHeight="4em"
        btnText="전환"
        photoURL={photoURL}
        displayName={displayName}
        name={name}
      />
      <FollowRecomend>
        <RecomendText>회원님을 위한 추천</RecomendText>
        <RecomendBtn>모두 보기</RecomendBtn>
      </FollowRecomend>
      <Profiles imgHeight="2em" btnText="팔로우" />
    </FollowList>
  );
};
export default HomeFollow;
