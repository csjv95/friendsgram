import React from "react";
import styled from "styled-components";
import { StMainRouterSection } from "../../Global/StMainRouterSection/StMainRouterSection";
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
  const onBtnClick = () => {
    // When clicked 
    // following = 내가 follow한거 / follower 나를 follow 한사람
    // step 1. 팔로워에 내유아이 찾아서 팔로잉에 click된 아이디 넣고
    // step 2. 팔로잉 한 사람의 아이디에 follow에 follower에 아이디넣기
  }

  return (
    <StMainRouterSection>
      <StSuggestContainer>
        <StSuggetTitle>추천</StSuggetTitle>
        <StSugget>
          {usersList.map((user, index) => (
            <Profiles
              key={index}
              imgHeight="3em"
              btnText="팔로우"
              photoURL={user.photoURL}
              displayName={user.displayName}
              name={user.name}
              onBtnClick={onBtnClick}
            />
          ))}
        </StSugget>
      </StSuggestContainer>
    </StMainRouterSection>
  );
};

export default Suggest;
