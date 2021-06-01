import React, { useEffect, useState } from "react";
import { StTriangle, StRectangle } from "../../Global/StBubbleChat/BubbleChat";
import { getSearch } from "../../service/search/getSearch";
import { Theme } from "../../style/Theme";
import SearchProfile from "./SearchProfile";
import SearchRecord from "./SearchRecord";

const Search = ({ searchText }) => {
  const [recomendUser, setRecomendUser] = useState([]);

  useEffect(() => {
    getSearch(searchText, setRecomendUser);
    // return () => {
    //   getSearch(searchText,setRecomendUser)
    // }
  }, [searchText]);

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
      <StRectangle top="2.5em" left="-5em" width="23em" height="23em">
        {/* 클릭했을때 */}
        {!searchText && <SearchRecord />}

        {/* // 검색할때 */}
        {searchText &&
          recomendUser.map((user) => (
            <SearchProfile key={user} user={user} />
          ))}
      </StRectangle>
    </>
  );
};

export default Search;
