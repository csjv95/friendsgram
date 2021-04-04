import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { StMainRouterSection } from "../../Global/StMainRouterSection/StMainRouterSection";
import DirectRouter from "../../routes/directRouter/directRouter";

const DirectContainer = styled.section`
  width: 900px;
  margin: 0 auto;
  display: flex;
  border: 1px solid lightgray;
  background-color: white;
`;

const DirectFriends = styled.section`
  width: 40%;
  border-right: 1px solid lightgray;
`;

const DirectChat = styled.section`
  width: 60%;
`;

const UserName = styled.div`
  width: 100%;
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
`;
const Direct = () => {
  const users = [
    { username: "SJ" },
    { username: "Reem" },
    { username: "Sandra" },
  ];
  return (
    <StMainRouterSection>
      <DirectContainer>
        <DirectFriends>
          <UserName>my name</UserName>
          <FriendsList>
            {users.map((user, index) => (
              <Link key={index} to={`/direct/${user.username}`}>
                {user.username}
              </Link>
            ))}
          </FriendsList>
        </DirectFriends>
        <DirectChat>
          <DirectRouter users={users}/>
        </DirectChat>
      </DirectContainer>
    </StMainRouterSection>
  );
};

export default Direct;
