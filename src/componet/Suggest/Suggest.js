import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { StMainRouterSection } from "../../Global/StMainRouterSection/StMainRouterSection";
import Profiles from "../Home/Profiles";
import setFollow from "../../service/follow/setFollow";
import { Theme } from "../../style/Theme";

const StSuggestContainer = styled.section`
  margin: 0 auto;
`;

const StSuggetTitle = styled.h1`
  font-size: 1em;
  font-weight: 600;
`;

const StSugget = styled.ul`
  padding: 1em;
  width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.contentColor};
`;

const Suggest = ({ usersList, followingList, followerList }) => {
  const [isFollowing, setIsFollowing] = useState([]);
 
  const onBtnClick = async (event) => {
    const targetUser = event.target.parentNode.dataset.uid;
    console.log("before setFollow", isFollowing);
    await setFollow(targetUser, followingList, setIsFollowing);
    console.log("after setfollow", isFollowing);
  };

  return (
    <StMainRouterSection>
      <StSuggestContainer>
        <StSuggetTitle>회원님을 위한 추천</StSuggetTitle>
        <StSugget>
          {usersList.map((user) => (
            <Profiles
              key={user.uid}
              imgHeight="3em"
              photoURL={user.photoURL}
              displayName={user.displayName}
              name={user.name}
              btnPadding="0.5em"
              btnColor={Theme.colors.contentColor}
              btnBgColor={Theme.colors.blue}
              btnText={followingList.includes(user.uid) ? "언팔로우" : "팔로우"}
              onBtnClick={onBtnClick}
              uid={user.uid}
              followingList={followingList}
            />
          ))}
        </StSugget>
      </StSuggestContainer>
    </StMainRouterSection>
  );
};

export default Suggest;
