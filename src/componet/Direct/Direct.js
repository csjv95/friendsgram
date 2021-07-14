import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { StMainRouterSection } from "../../Global/StMainRouterSection/StMainRouterSection";
import { StProfileImg } from "../../Global/StProfileImg/StProfileImg";
import DirectRouter from "../../routes/directRouter/directRouter";
import StButton from "../../Global/StButton/StButton";
import { StPencilSquare } from "../../Global/StIcon/StIcon";
import { StList, StItem } from "../../Global/StList/StList";
import { Theme } from "../../style/Theme";

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

const Direct = ({ userData, handleSend }) => {
  const users = [
    { username: "SJ" },
    { username: "Reem" },
    { username: "Sandra" },
  ];

  return (
    <StMainRouterSection>
      <StDirectContainer>
        <StDirectFriends>
          <StList
            display="flex"
            borderBottom={`1px solid ${Theme.colors.borderColor}`}
          >
            <StItem
              flexGrow="1"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              {userData.displayName}
            </StItem>
            <StItem onClick={handleSend}>
              <StButton
                padding="1em"
                btnText={<StPencilSquare width="2em" />}
              />
            </StItem>
          </StList>

          <StFriendsList>
            {users.map((user, index) => (
              <Link key={index} to={`/direct/${user.username}`}>
                <DirectProfile>
                  <StProfileImg
                    src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/56593842_427595071141963_9102473363216924672_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=yyXKpuG-JU8AX8YRTka&edm=ABfd0MgAAAAA&ccb=7-4&oh=142b6867c72be34b9d9262ae9269f410&oe=609AF8FC&_nc_sid=7bff83"
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
