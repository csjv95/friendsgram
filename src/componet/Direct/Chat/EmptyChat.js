import React from "react";
import { StSendIcon } from "../../../Global/StIcon/StIcon";
import styled from "styled-components";

const StEmptyContainer = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StTitle = styled.div`
  margin : 0.5em 0 0.2em 0;
  font-size: 1.5em;
  font-weight: 300;
`;

const StText = styled.div`
  margin-bottom: 1.5em;
  font-size: 0.8em;
  font-weight: 600;
`;

const StSendBtn = styled.button`
  padding: 0.5em;
  border-radius: 0.3em;
  font-weight: 600;
  color: white;
  background-color: blueviolet;
`;

const EmptyChat = () => {
  return (
    <StEmptyContainer>
      <StSendIcon width="6" />
      <StTitle>내 메세지</StTitle>
      <StText>친구나 그룹에 비공개 사진과 메세지를 보내보세요.</StText>
      <StSendBtn>메세지 보내기</StSendBtn>
    </StEmptyContainer>
  );
};

export default EmptyChat;
