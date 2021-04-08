import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { StMainRouterSection } from "../../Global/StMainRouterSection/StMainRouterSection";
import { StProfileImg } from "../../Global/StProfileImg/StProfileImg";
import DirectRouter from "../../routes/directRouter/directRouter";

const StDirectContainer = styled.section`
  width: 900px;
  margin: 0 auto;
  display: flex;
  border: 1px solid lightgray;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;

const StDirectFriends = styled.section`
  width: 40%;
  border-right: 1px solid ${({ theme }) => theme.colors.borderColor};
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
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};;
`;

const StFriendsList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const DirectProfile = styled.div`
  margin: 0.5em 1em;
  display: flex;
  align-items: center;
`;

const DirectUserInfo = styled.ul`
  margin-left: 1em;
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
                <DirectProfile>
                  <StProfileImg
                    src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/56593842_427595071141963_9102473363216924672_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=8GvUdv2sa94AX_J7O03&oh=9a29dc6ab80091beab9f95a0f5ab8c6c&oe=6075CB7C"
                    alt="my"
                    height="4em"
                  />
                  <DirectUserInfo>
                    <li>{user.username}</li>
                    <li>최근활동</li>
                  </DirectUserInfo>
                </DirectProfile>
              </Link>
            ))}
          </StFriendsList>
        </StDirectFriends>
        <StDirectChat>
          <DirectRouter users={users} />
        </StDirectChat>
      </StDirectContainer>
    </StMainRouterSection>
  );
};

export default Direct;