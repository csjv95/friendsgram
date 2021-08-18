import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import StButton from "../../../Global/StButton/StButton";
import { StFilePicture, StSmileIocn } from "../../../Global/StIcon/StIcon";
import { StProfileImg } from "../../../Global/StProfileImg/StProfileImg";
import { StInput } from "../../../Global/StTags/StTags";
import getMessage from "../../../service/message/getMessage";
import sendMessage from "../../../service/message/sendMessage";
import localTime from "../../../service/time/localTime";
import { Theme } from "../../../style/Theme";

const StChat = styled.ul`
  flex-grow: 1;
  height: 36em;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const StChatContainer = styled.li`
  align-self: ${({ alignItems }) => alignItems};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StChatText = styled.div`
  max-width: 10em;
  height: auto;
  margin: 0.5em;
  padding: 0.5em;
  border: 1px solid ${Theme.colors.borderColor};
  border-radius: 1em;
  /* word-break: break-all; */
  overflow-wrap: break-word;
`;

const StChatTime = styled.span`
  font-size: 0.8em;
`;

const StDiv = styled.div`
  padding: 2em;
`;

const StChatInputBox = styled.div`
  padding: 0.5em 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${Theme.colors.borderColor};
  border-radius: 2em;
`;

const StChatForm = styled.form`
  flex-grow: 1;
  padding: 0 1em;
`;

const StFileInput = styled.input`
  display: none;
`;

const UserChat = ({ clickedRoomId, currentUserUid }) => {
  const [text, setText] = useState("");
  const [view, setView] = useState([]);
  const scrollRef = useRef();
  const path = useParams();

  useEffect(() => {
    const messages = getMessage(path.rommId, setView);
    return () => {
      messages();
    };
  }, [path.rommId]);

  const textChange = (event) => {
    const text = event.target.value;
    setText(text);
  };

  const scrollInTo = () => {
    console.log(scrollRef.current.lastChild);
    scrollRef.current.lastChild &&
      scrollRef.current.lastChild.scrollIntoView(
        { behavior: "smooth" },
        { block: "end" },
        { inline: "end " }
      );
  };

  const textSubmit = async (event) => {
    event.preventDefault();
    event.target.childNodes[0].value = "";
    await sendMessage(text, path.rommId);
    scrollInTo();
  };

  return (
    <>
      <StChat ref={scrollRef}>
        {view.map((chat) =>
          chat.uid === currentUserUid ? (
            <StChatContainer key={chat.time} alignItems="flex-end">
              <StChatTime>{localTime(chat.time)}</StChatTime>
              <StChatText>{chat.text}</StChatText>
              <StProfileImg src={chat.photoURL} height="2em" />
            </StChatContainer>
          ) : (
            <StChatContainer key={chat.time} alignItems="flex-start">
              <StProfileImg src={chat.photoURL} height="2em" />
              <StChatText>{chat.text}</StChatText>
              <StChatTime>{localTime(chat.time)}</StChatTime>
            </StChatContainer>
          )
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
              onClick={textSubmit}
              width="4em"
              fontWeight={Theme.fonts.bold}
              color={Theme.colors.skyblueInnerText}
              btnText="보내기"
            />
          )}
        </StChatInputBox>
      </StDiv>
    </>
  );
};

export default UserChat;
