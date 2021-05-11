import React, { useEffect } from 'react';
import styled from "styled-components";
import { getSearch } from '../../service/search/getSearch';

const StSearch = styled.section`
  position : absolute;
  width : 20em;
  height : 20em;
  background-color : ${({theme}) => theme.colors.contentColor}
`

const StTitle = styled.h1`
  font-size:1em
`
const Search = ({headerText}) => {

  useEffect(()=> {
    getSearch(headerText)
  },[headerText])

  return (
    <StSearch >
      <StTitle>search</StTitle>
    </StSearch>
  );
};

export default Search;