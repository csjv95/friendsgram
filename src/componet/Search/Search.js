import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getSearch } from "../../service/search/getSearch";

const StSearch = styled.section`
  position: absolute;
  width: 20em;
  height: 20em;
  background-color: ${({ theme }) => theme.colors.contentColor};
`;

const StTitle = styled.h1`
  font-size: 1em;
`;
const Search = ({ searchText, usersList }) => {
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
        <StTitle key={user}>{user}</StTitle>
      ))}
    </StSearch>
  );
};

export default Search;
