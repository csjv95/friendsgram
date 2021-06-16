import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StButton from "../../Global/StButton/StButton";
import getSearchRecord from "../../service/search/getSearchRecord";
import searchRecordAllClear from "../../service/search/searchRecordAllClear";
import { Theme } from "../../style/Theme";
import RecordProfile from "./RecordProfile";

const StSearchList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StSearchListBottome = styled.ul`
  display: flex;
  flex-direction: column;
`;

const StTitle = styled.h1`
  font-size: 1em;
`;

const SearchRecord = () => {
  const [record, setRecord] = useState([]);

  useEffect(() => {
    getSearchRecord(setRecord);
  }, []);

  const allClearBtn = () => {
    searchRecordAllClear();
  };

  return (
    <>
      <StSearchList>
        <li>
          <StTitle>최근 검색 항목</StTitle>
        </li>
        <li onClick={allClearBtn}>
          <StButton
            width="7em"
            padding="0.5em"
            fontSize="0.9em"
            fontWeight="600"
            bgColor={Theme.colors.contentColor}
            color={Theme.colors.blue}
            btnText="모두 지우기"
          />
        </li>
      </StSearchList>
      <StSearchListBottome>
        {record.map((user) => (
          <RecordProfile key={user} user={user} />
        ))}
      </StSearchListBottome>
    </>
  );
};

export default SearchRecord;
