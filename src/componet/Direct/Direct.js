import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { StMainRouterSection } from "../../Global/StMainRouterSection/StMainRouterSection";
import DirectRouter from "../../routes/directRouter/directRouter";

const StDirectContainer = styled.section`
  width: 900px;
  margin: 0 auto;
  display: flex;
  border: 1px solid lightgray;
  background-color: white;
`;

const StDirectFriends = styled.section`
  width: 40%;
  border-right: 1px solid lightgray;
`;

const StDirectChat = styled.section`
  width: 60%;
`;

const StUserName = styled.div`
  width: 100%;
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid lightgrey;
`;

const StFriendsList = styled.ul`
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
      <StDirectContainer>
        <StDirectFriends>
          <StUserName>my name</StUserName>
          <StFriendsList>
            {users.map((user, index) => (
              <Link key={index} to={`/direct/${user.username}`}>
                {user.username}
              </Link>
            ))}
          </StFriendsList>
        </StDirectFriends>
        <StDirectChat>
          <DirectRouter users={users}/>
        </StDirectChat>
      </StDirectContainer>
    </StMainRouterSection>
  );
};

export default Direct;
