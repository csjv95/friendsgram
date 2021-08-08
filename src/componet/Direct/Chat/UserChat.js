import React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import StButton from '../../../Global/StButton/StButton'
import { StFilePicture, StSmileIocn } from '../../../Global/StIcon/StIcon'
import { StInput } from '../../../Global/StTags/StTags'
import getMessage from '../../../service/message/getMessage'
import sendMessage from '../../../service/message/sendMessage'
import { Theme } from '../../../style/Theme'

const StChat = styled.ul`
  flex-grow: 1;
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
const UserChat = ({ clickedRoomId }) => {
  const [text, setText] = useState('')
  const [view, setView] = useState([])

  useEffect(() => {
    getMessage(clickedRoomId, setView)
  }, [clickedRoomId])

  const textChange = (event) => {
    const text = event.target.value
    setText(text)
  }

  const textSubmit = (event) => {
    event.preventDefault()
    event.target.childNodes[0].value = ''
    sendMessage(text, clickedRoomId)
    console.log('sned')
  }
  console.log(view)
  return (
    <>
      <StChat>{text}</StChat>
      <StDiv>
        <StChatInputBox onSubmit={textSubmit}>
          <StButton width="2.5em" btnText={<StSmileIocn />} />
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
