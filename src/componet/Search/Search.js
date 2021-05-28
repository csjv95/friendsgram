import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getSearch } from "../../service/search/getSearch";
import SearchProfile from "./SearchProfile";

const StSearch = styled.section`
  position: absolute;
  width: 20em;
  height: 20em;
  background-color: ${({ theme }) => theme.colors.contentColor};
`;

const StTitle = styled.h1`
  font-size: 1em;
`;

const Search = ({ searchText }) => {
  const [recomendUser, setRecomendUser] = useState([]);

  useEffect(() => {
    getSearch(searchText, setRecomendUser);
    // return () => {
    //   getSearch(searchText,setRecomendUser)
    // }
  }, [searchText]);

  return (
    <StSearch>
      {recomendUser.map((user) => (
        <SearchProfile key={user} user={user} />
      ))}
    </StSearch>
  );
};

export default Search;
