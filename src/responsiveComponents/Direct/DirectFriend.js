import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StButton from "../../Global/StButton/StButton";
import { StMainRouterSection } from "../../Global/StMainRouterSection/StMainRouterSection";
import { StItem, StList } from "../../Global/StList/StList";
import { Theme } from "../../style/Theme";
import { StPencilSquare } from "../../Global/StIcon/StIcon";
import { NavLink } from "react-router-dom";
import getMessageRoom from "../../service/message/getMessageRoom";
import StProfileChat from "../../Global/StProfile/StProfileChat";

const StDirectContainer = styled.section`
  width: 100%;
  max-height: 40em;
  margin: 0 auto;
  display: flex;
  border: 1px solid lightgray;
  background-color: ${({ theme }) => theme.colors.contentColor};

  @media only screen and (max-width: 900px) {
    max-height: 100%;
  }
`;

const StDirectFriends = styled.div`
  width: 100%;
  overflow: hidden;
`;

const StNavLink = styled(NavLink)`
  &:hover {
    background-color: ${Theme.colors.hoverColor};
  }
  &.selected {
    background-color: ${Theme.colors.hoverColor};
  }
`;

const StFriendsList = styled.ul`
  height: 600px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  @media only screen and (max-width: 900px) {
    height: 100%;
  }
`;

const DirectFriend = ({ userData, changeSendModal, currentUserUid }) => {
  const [chatRooms, setChatRooms] = useState([]);
  const [clickedRoomId, setClickedRoomId] = useState("");
  useEffect(() => {
    getMessageRoom(setChatRooms);

    return () => {
      setChatRooms("");
    };
  }, [clickedRoomId]);

  return (
    <StMainRouterSection padding="3em 0 0 0">
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
            <StItem onClick={changeSendModal}>
              <StButton
                padding="1em"
                btnText={<StPencilSquare width="2em" />}
              />
            </StItem>
          </StList>

          <StFriendsList>
            {chatRooms &&
              chatRooms.map((user, index) => (
                <StNavLink
                  key={index}
                  to={`/direct/${user[0][1].roomId}`}
                  activeClassName="selected"
                  onClick={async (e) => {
                    setClickedRoomId(e.target.dataset.room);
                  }}
                >
                  {user.length > 1 ? (
                    <StProfileChat
                      photoURL="/imgs/groupChat.jpg"
                      displayName="group chat"
                      profilePadding="1em"
                      imgHeight="3em"
                      room={user[0][1].roomId}
                    />
                  ) : (
                    <StProfileChat
                      photoURL={user[0][0].photoURL}
                      displayName={user[0][0].displayName}
                      uid={user[0][0].uid}
                      profilePadding="1em"
                      imgHeight="3em"
                      room={user[0][1].roomId}
                    />
                  )}
                </StNavLink>
              ))}
          </StFriendsList>
        </StDirectFriends>
      </StDirectContainer>
    </StMainRouterSection>
  );
};

export default DirectFriend;
