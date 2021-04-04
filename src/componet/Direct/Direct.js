import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { StMainRouterSection } from "../../Global/StMainRouterSection/StMainRouterSection";

const DirectContainer = styled.section`
  width : 900px;
  margin: 0 auto;
  display: flex;
  border: 1px solid lightgray;
  background-color: white;
`;

const DirectFriends = styled.section`
  width: 40%;
  border-right: 1px solid lightgray;
`

const DirectChat = styled.section`
  width: 60%;
`

const UserName = styled.div`
  width : 100%;
  padding : 1em;
  display : flex;
  justify-content: center;
  align-items: center;
`

const FriendsList = styled.ul`
  display:flex;
  flex-direction: column;
`
const Direct = () => {
  return (
    <StMainRouterSection>
      <DirectContainer>
        <DirectFriends>
          <UserName>my name</UserName>
          <FriendsList>
            <Link to="#1">user1</Link>
            <Link to="#2">user2</Link>
            <Link to="#3">user3</Link>
            <Link to="#4">user4</Link>
          </FriendsList>
        </DirectFriends>
        <DirectChat>right</DirectChat>
      </DirectContainer>
    </StMainRouterSection>
  );
};

export default Direct;
