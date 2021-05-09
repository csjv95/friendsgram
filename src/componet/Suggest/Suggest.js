import React, { useState } from "react";
import styled from "styled-components";
import { StMainRouterSection } from "../../Global/StMainRouterSection/StMainRouterSection";
import Profiles from "../Home/Profiles";
import setFollow from "../../service/follow/setFollow";
import { changeBtn } from "../../service/follow/changeBtn";

const StSuggestContainer = styled.section`
  margin: 0 auto;
`;

const StSuggetTitle = styled.h1`
  font-size : 1em;
  font-weight : 600;
`

const StSugget = styled.ul`
  padding: 1em;
  width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.contentColor};
`;

const Suggest = ({ usersList,followingList }) => {
  const [isFollowing, setIsFollowing] = useState("");

  //btn 바꾸기
  // when clicked follow btn change word like that following
  const onBtnClick = async (event) => {
    const targetUser = event.target.parentNode.dataset.uid;
    console.log('before setFollow',isFollowing);
    await setFollow(targetUser,followingList,setIsFollowing);
    console.log('after setfollow',isFollowing);
    await changeBtn(targetUser,followingList,isFollowing);
  }

  return (
    <StMainRouterSection>
      <StSuggestContainer>
        <StSuggetTitle>추천</StSuggetTitle>
        <StSugget>
          {usersList.map((user) => (
            <Profiles
              key={user.uid}
              imgHeight="3em"
              btnText="팔로우"
              photoURL={user.photoURL}
              displayName={user.displayName}
              name={user.name}
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
