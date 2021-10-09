import React from "react";
import styled from "styled-components";
import { StModalContainer } from "../../Global/StModal/StModal";
import { StRectangle } from "../../Global/StBubbleChat/BubbleChat";
import SearchRecord from "../../componet/Search/SearchRecord";
import setSearchRecord from "../../service/search/setSearchRecord";
import SearchProfile from "../../componet/Search/SearchProfile";
import StButton from "../../Global/StButton/StButton";
import { StCloseIcon } from "../../Global/StIcon/StIcon";
import { CloseBtnCotainer } from "../../componet/Upload/Upload";
import { Theme } from "../../style/Theme";

const StSearchMain = styled.main`
  width: 100%;
`;

const StSearchInput = styled.input`
  width: 100%;
  padding: 1em;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 0.2em;
`;

const ResponsiveSearch = ({
  recomendUser,
  searchText,
  setSearchText,
  search,
  setSearch,
  handleSearch,
}) => {
  const onSearchSubmit = (event) => {
    event.preventDefault();
    setSearchRecord(searchText);
  };

  const onSearchClick = () => {
    setSearch(!search);
  };

  const onSearchChange = (event) => {
    const text = event.target.value;
    setSearchText(text);
  };

  return (
    <StModalContainer
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="cetner"
    >
      <StSearchMain>
        <CloseBtnCotainer bgColor={Theme.colors.contentColor}>
          <StButton
            btnText={<StCloseIcon width="1.5em" />}
            onClick={handleSearch}
          />
        </CloseBtnCotainer>

        <form onSubmit={onSearchSubmit}>
          <StSearchInput
            type="search"
            autoComplete="off"
            placeholder="검색"
            onClick={onSearchClick}
            onChange={onSearchChange}
          />
        </form>

        {search && (
          <StRectangle width="100%" height="100%">
            {/* 클릭했을때 */}
            {!searchText && <SearchRecord handleSearch={handleSearch} />}

            {/* 검색할떄 */}
            {searchText &&
              recomendUser.map((user) => (
                <SearchProfile
                  key={user}
                  user={user}
                  handleSearch={handleSearch}
                />
              ))}
          </StRectangle>
        )}
      </StSearchMain>
    </StModalContainer>
  );
};

export default ResponsiveSearch;
