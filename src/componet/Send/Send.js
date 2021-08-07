import React, { useEffect, useState } from 'react'
import { StClear } from '../../Global/StIcon/StIcon'
import {
  StModalBtn,
  StModalContainer,
  StModalMain,
} from '../../Global/StModal/StModal'
import { Theme } from '../../style/Theme'
import { StDiv, StHeader, StMain, StInput } from '../../Global/StTags/StTags'
import StButton from '../../Global/StButton/StButton'
import { getSearch } from '../../service/search/getSearch'
import SearchProfile from '../Search/SearchProfile'
import { StList } from '../../Global/StList/StList'
import makeMessageRoom from '../../service/message/makeMessageRoom'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import setMessageRoomId from '../../service/message/setMessageRoomId'

const StToGoUserLink = styled(Link)`
  width: 100%;
`

const Send = ({ handleSend, roomId, setRoomId }) => {
  const [inputText, setInputText] = useState(null)
  const [recomendUser, setRecomendUser] = useState([])
  const [checkUser, setCheckUser] = useState([])
  const isCheckBox = true

  useEffect(() => {
    getSearch(inputText, setRecomendUser)
  }, [inputText])

  useEffect(() => {
    setMessageRoomId(setRoomId)
  }, [setRoomId])

  const inputChangeText = (event) => {
    const text = event.target.value
    setInputText(text)
  }

  const deleteCheckUser = (user) => {
    setCheckUser(checkUser.filter((result) => result !== user))
  }
  console.log(checkUser)
  return (
    <StModalContainer
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <StModalMain
        width="46em"
        border={`1px solid ${Theme.colors.borderColor}`}
        borderRadius="1em"
        bgColor={Theme.colors.contentColor}
      >
        <StHeader
          padding="0 1em"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderBottom={`1px solid ${Theme.colors.borderColor}`}
        >
          <StModalBtn onClick={handleSend}>
            <StClear width="2em" />
          </StModalBtn>
          <h1>새로운 메세지</h1>
          <StButton
            btnText={
              <StToGoUserLink to={`/direct/${roomId}`}>다음</StToGoUserLink>
            }
            onClick={() => {
              makeMessageRoom(checkUser, roomId, setRoomId)
              handleSend()
            }}
          />
        </StHeader>

        <StMain>
          <StInput
            type="search"
            placeholder="검색..."
            onChange={inputChangeText}
            width="100%"
            padding="1em"
            border="none"
            borderBottom={`1px solid ${Theme.colors.borderColor}`}
          />
          <StDiv
            padding="1em"
            borderBottom={`1px solid ${Theme.colors.borderColor}`}
            fontWeight="600"
          >
            받는사람 :
            {checkUser.map((user) => (
              <StButton
                key={user}
                margin="0 0.5em"
                padding="0.5em"
                bgColor={Theme.colors.skyblue}
                color={Theme.colors.skyblueInnerText}
                btnText={user}
                onClick={() => {
                  deleteCheckUser(user)
                }}
              />
            ))}
          </StDiv>

          <StList padding="1em" fontWeight="600" height="40em" overFlowY="auto">
            추천
            {inputText &&
              recomendUser.map((user) => (
                <SearchProfile
                  key={user}
                  user={user}
                  isCheckBox={isCheckBox}
                  checkUser={checkUser}
                  setCheckUser={setCheckUser}
                />
              ))}
          </StList>
        </StMain>
      </StModalMain>
    </StModalContainer>
  )
}

export default Send
