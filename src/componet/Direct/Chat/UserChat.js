import React, { useRef } from 'react'
import { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import StButton from '../../../Global/StButton/StButton'
import { StFilePicture, StSmileIocn } from '../../../Global/StIcon/StIcon'
import { StInput } from '../../../Global/StTags/StTags'
import getMessage from '../../../service/message/getMessage'
import sendMessage from '../../../service/message/sendMessage'
import { Theme } from '../../../style/Theme'

const StChat = styled.ul`
  flex-grow: 1;
  height: 36em;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

const StChatMy = styled.li`
  align-self: flex-end;
  margin: 0.5em;
  padding: 0.5em;
  border: 1px solid black;
  border-radius: 1em;
`

const StChatUsers = styled.li`
  align-self: flex-start;
  margin: 0.5em;
  padding: 0.5em;
  border: 1px solid black;
  border-radius: 1em;
`

const StDiv = styled.div`
  padding: 2em;
`

const StChatInputBox = styled.div`
  padding: 0.5em 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${Theme.colors.borderColor};
  border-radius: 2em;
`

const StChatForm = styled.form`
  flex-grow: 1;
  padding: 0 1em;
`

const StFileInput = styled.input`
  display: none;
`
const UserChat = ({ clickedRoomId, currentUserUid }) => {
  const [text, setText] = useState('')
  const [view, setView] = useState([])
  const scrollRef = useRef()
  const path = useParams()

  useEffect(() => {
    getMessage(path.rommId, setView)
  }, [clickedRoomId])

  const textChange = (event) => {
    const text = event.target.value
    setText(text)
  }

  const textSubmit = (event) => {
    event.preventDefault()
    event.target.childNodes[0].value = ''
    sendMessage(text, path.rommId)
    scrollRef.current.lastChild && scrollRef.current.lastChild.focus()
  }
  return (
    <>
      <StChat ref={scrollRef}>
        {view.map((chat) =>
          chat.uid === currentUserUid ? (
            <StChatMy key={chat.time}>{chat.text}</StChatMy>
          ) : (
            <StChatUsers key={chat.time}>{chat.text}</StChatUsers>
          ),
        )}
      </StChat>
      <StDiv>
        <StChatInputBox onSubmit={textSubmit}>
          <StButton
            onClick={textSubmit}
            width="2.5em"
            btnText={<StSmileIocn />}
          />
          <StChatForm>
            <StInput
              width="100%"
              height="100%"
              padding="0.5em"
              outLine="none"
              border="none"
              onChange={textChange}
              placeholder="메시지 입력..."
            />
          </StChatForm>
          {!text && (
            <>
              <StFileInput type="file" id="files" multiple />
              <label htmlFor="files">
                <StButton width="2.5em" btnText={<StFilePicture />} />
              </label>
            </>
          )}
          {text && (
            <StButton
              width="4em"
              fontWeight={Theme.fonts.bold}
              color={Theme.colors.skyblueInnerText}
              btnText="보내기"
            />
          )}
        </StChatInputBox>
      </StDiv>
    </>
  )
}

export default UserChat
