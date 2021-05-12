import React from "react";
import styled from "styled-components";

const StSearch = styled.section`
  position: absolute;
  width: 20em;
  height: 20em;
  background-color: ${({ theme }) => theme.colors.contentColor};
`;

const StTitle = styled.h1`
  font-size: 1em;
`;

const SearchRecord = ({currentEvent}) => {
  const handleOnClick = () => {
    console.log(currentEvent);
  }

  return (
    <StSearch onClick={handleOnClick}>
      <StTitle>최근 검색 항목</StTitle>
    </StSearch>
  );
};

export default SearchRecord;
