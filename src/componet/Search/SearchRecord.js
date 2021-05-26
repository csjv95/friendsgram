import React from "react";
import styled from "styled-components";
import Button from "../../Global/Button/Button";
import { StRectangle, StTriangle } from "../../Global/StBubbleChat/BubbleChat";
import { Theme } from "../../style/Theme";

const StSearchList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StTitle = styled.h1`
  font-size: 1em;
`;

const SearchRecord = ({ currentEvent,searchText }) => {
  const handleOnClick = () => {
    console.log(currentEvent);
  };

  return (
    <>
      <StTriangle
        top="2em"
        left="5em"
        borderTop="1em solid none"
        borderBottom={`1em solid ${Theme.colors.contentColor}`}
        borderLeft="1em solid transparent;"
        borderRight="1em solid transparent;"
      />
      <StRectangle
        top="2.5em"
        left="-5em"
        width="23em"
        height="23em"
        onClick={handleOnClick}
      >
        <StSearchList>
          <li>
            <StTitle>최근 검색 항목</StTitle>
          </li>
          <li>
            <Button
              width="7em"
              padding="0.5em"
              fontSize="0.9em"
              fontWeight="600"
              bgColor={Theme.colors.contentColor}
              color={Theme.colors.blue}
              btnText="모두 지우기"
            />
          </li>
          {/* 검색 length 만큼 list 뿌리기 */}
        </StSearchList>
      </StRectangle>
    </>
  );
};

export default SearchRecord;
