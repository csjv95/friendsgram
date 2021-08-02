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
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`

const StDirectFriends = styled.section`
  width: 40%;
  border-right: 1px solid ${({ theme }) => theme.colors.borderColor};
`

const StDirectChat = styled.section`
  width: 60%;
`

const StFriendsList = styled.ul`
  display: flex;
  flex-direction: column;
`

const Direct = ({ userData, handleSend }) => {
  const [chatRooms, setChatRooms] = useState([])

  useEffect(() => {
    getMessageRoom(setChatRooms)
  }, [])

  console.log(chatRooms)
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
                <Link key={index} to={`/direct/${user.displayName}`}>
                  <StProfileChat
                    photoURL={user.photoURL}
                    displayName={user.displayName}
                    uid={user.uid}
                    profilePadding="1em"
                    imgHeight="3em"
                  />
                </Link>
              ))}
          </StFriendsList>
        </StDirectFriends>
        <StDirectChat>
          <DirectRouter users={chatRooms} />
        </StDirectChat>
      </StDirectContainer>
    </StMainRouterSection>
  )
}

export default Direct
