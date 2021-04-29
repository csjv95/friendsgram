import React from "react";
import styled from "styled-components";
import { StMainRouterSection } from "../../Global/StMainRouterSection/StMainRouterSection";
import setFollow from "../../service/follow/setFollow";
import Profiles from "../Home/Profiles";

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

const Suggest = ({ usersList }) => {

  const onBtnClick = (event) => {
     const targetUser = event.target.parentNode.dataset.uid;
     setFollow(targetUser);
     const currentText = event.target;
     currentText.innerText="팔로잉";
  }

  return (
    <StMainRouterSection>
      <StSuggestContainer>
        <StSuggetTitle>추천</StSuggetTitle>
        <StSugget>
          {console.log(usersList)}
          {usersList.map((user, index) => (
            <Profiles
              key={index}
              imgHeight="3em"
              btnText="팔로우"
              photoURL={user.photoURL}
              displayName={user.displayName}
              name={user.name}
              onBtnClick={onBtnClick}
              uid={user.uid}
            />
          ))}
        </StSugget>
      </StSuggestContainer>
    </StMainRouterSection>
  );
};

export default Suggest;
