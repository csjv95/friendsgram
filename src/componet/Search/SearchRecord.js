import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../Global/Button/Button";
import getSearchRecord from "../../service/search/getSearchRecord";
import { Theme } from "../../style/Theme";

const StSearchList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StTitle = styled.h1`
  font-size: 1em;
`;

const SearchRecord = ({ currentEvent, searchText }) => {
  const [record, setRecord] = useState([]);

  const handleOnClick = () => {
    console.log(currentEvent);
  };

  useEffect(() => {
    getSearchRecord(setRecord);
  }, []);

  return (
    <>
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
        {/* {console.log(record)} */}
      </StSearchList>
    </>
  );
};

export default SearchRecord;
