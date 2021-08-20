import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { StMainRouterSection } from "../../Global/StMainRouterSection/StMainRouterSection";
import DirectRouter from "../../routes/directRouter/directRouter";
import StButton from "../../Global/StButton/StButton";
import { StPencilSquare } from "../../Global/StIcon/StIcon";
import { StList, StItem } from "../../Global/StList/StList";
import { Theme } from "../../style/Theme";
import getMessageRoom from "../../service/message/getMessageRoom";
import StProfileChat from "../../Global/StProfile/StProfileChat";

const StDirectContainer = styled.section`
  width: 900px;
  max-height: 40em;
  margin: 0 auto;
  display: flex;
  border: 1px solid lightgray;
  background-color: ${({ theme }) => theme.colors.contentColor};
`;

const StDirectFriends = styled.section`
  width: 40%;
  border-right: 1px solid ${({ theme }) => theme.colors.borderColor};
`;

const StDirectChat = styled.section`
  width: 60%;
  display: flex;
  flex-direction: column;
`;

const StFriendsList = styled.ul`
  height: 36em;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const StNavLink = styled(NavLink)`
  &:hover {
    background-color: ${Theme.colors.hoverColor};
  }
  &.selected {
    background-color: ${Theme.colors.hoverColor};
  }
`;

const Direct = ({
  userData,
  handleSend,
  roomId,
  currentUserUid,
  setForegroundMessageCount,
}) => {
  const [chatRooms, setChatRooms] = useState([]);
  const [clickedRoomId, setClickedRoomId] = useState("");
  // const [view, setView] = useState([])

  useEffect(() => {
    getMessageRoom(setChatRooms);
    return () => {
      setChatRooms("");
    };
  }, [clickedRoomId]);

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
          {/* 그룹 채팅일떄 사진 storage에서 가져오기 변수 네이밍 해주기 user[0][1]*/}
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
        <StDirectChat>
          <DirectRouter
            users={chatRooms}
            handleSend={handleSend}
            clickedRoomId={clickedRoomId}
            currentUserUid={currentUserUid}
            setForegroundMessageCount={setForegroundMessageCount}
            // view={view}
          />
        </StDirectChat>
      </StDirectContainer>
    </StMainRouterSection>
  );
};

export default Direct;
