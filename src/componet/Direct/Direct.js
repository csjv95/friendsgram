import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StMainRouterSection } from '../../Global/StMainRouterSection/StMainRouterSection'
import DirectRouter from '../../routes/directRouter/directRouter'
import StButton from '../../Global/StButton/StButton'
import { StPencilSquare } from '../../Global/StIcon/StIcon'
import { StList, StItem } from '../../Global/StList/StList'
import { Theme } from '../../style/Theme'
import getMessageRoom from '../../service/message/getMessageRoom'
import StProfileChat from '../../Global/StProfile/StProfileChat'

const StDirectContainer = styled.section`
  width: 900px;
  margin: 0 auto;
  display: flex;
  border: 1px solid lightgray;
  background-color: ${({ theme }) => theme.colors.contentColor};
`

const StDirectFriends = styled.section`
  width: 40%;
  border-right: 1px solid ${({ theme }) => theme.colors.borderColor};
`

const StDirectChat = styled.section`
  width: 60%;
  display: flex;
  flex-direction: column;
`

const StFriendsList = styled.ul`
  height: 40.5em;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

const Direct = ({ userData, handleSend, roomId }) => {
  const [chatRooms, setChatRooms] = useState([])

  useEffect(() => {
    const rooms = getMessageRoom(setChatRooms)

    return () => {
      rooms()
      setChatRooms([])
    }
  }, [setChatRooms])
  // chatRooms.map((e) => e.flatMap((e) => console.log(e)))

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
            {chatRooms &&
              chatRooms.map((user, index) => (
                <Link key={index} to={`/direct/${user[1].roomId}`}>
                  <StProfileChat
                    photoURL={user[0].photoURL}
                    displayName={user[0].displayName}
                    uid={user[0].uid}
                    profilePadding="1em"
                    imgHeight="3em"
                    room={user[1].roomId}
                  />
                </Link>
              ))}
          </StFriendsList>
        </StDirectFriends>
        <StDirectChat>
          <DirectRouter users={chatRooms} handleSend={handleSend} />
        </StDirectChat>
      </StDirectContainer>
    </StMainRouterSection>
  )
}

export default Direct
