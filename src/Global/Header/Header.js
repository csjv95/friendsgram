import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import {
  StHomeIcon,
  StSendIcon,
  StPlusSquare,
  StHeartIcon,
} from "../StIcon/StIcon";
import { StProfileImg } from "../StProfileImg/StProfileImg";
import Search from "../../componet/Search/Search";
import SearchRecord from "../../componet/Search/SearchRecord";
import { useEffect } from "react";

const StHeaderContainer = styled.header`
  width: 100%;
  padding: 0.5em;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  margin-bottom: 4em;
  background-color: ${({ theme }) => theme.colors.contentColor};
  z-index: 100;
`;

const StHeaderLogo = styled.a`
  font-family: "Cookie", cursive;
  font-size: 2em;
  color: ${({ theme }) => theme.colors.logoColor};
  text-decoration: none;
`;

const StHeaderSearchLabel = styled.label`
  position: relative;
`;

const StHeaderSearch = styled.input`
  height: 1.2em;
  padding: 1em;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 0.2em;
`;

const StHeaderNavul = styled.ul`
  display: flex;
  & > :nth-child(n) {
    margin-right: 1em;
  }
`;

const StHeaderNavUlLi = styled.li`
  margin-right: 0.2em;
`;

const StHeaderNavUlLiMy = styled.li`
  height: 1.5em;
`;

const StMySection = styled.section`
  width: 10em;
  background-color: ${({ theme }) => theme.colors.contentColor};
`;
const StMyUl = styled.ul``;

const StMyLi = styled.li``;

const Header = ({ handlePost, userData }) => {
  const [search, setSearch] = useState(false);
  const [headerText, setHeaderText] = useState("");
  const [profile, setProfile] = useState(false);
  const RefSearch = useRef();

  // const searchOnClick = () => {
  //   setSearch(!search);
  // };
  //
  // const onSearchChange = (event) => {
  //   const text = event.target.value;
  //   setHeaderText(text);
  //   setSearch(false);
  // };

  const profileOnClick = () => {
    setProfile(!profile);
  };

  const onFocus = (event) => {
    setSearch(!search);
  };

  const onBlur = (event) => {
    setSearch(!search);
  }

  const activeStyle = {
    padding: `0.2em 0.2em 0.3em 0.2em`,
    border: `1px solid`,
    borderRadius: `50%`,
  };

  return (
    <StHeaderContainer>
      <StHeaderLogo href="/home">Intstargram</StHeaderLogo>
      <StHeaderSearchLabel htmlFor="search" >
        <StHeaderSearch
          id="search"
          type="search"
          placeholder="검색"
          //onChange={onSearchChange}
          autoComplete="off"
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {search && <SearchRecord RefSearch={RefSearch}/>}
        {headerText && <Search headerText={headerText} />}
      </StHeaderSearchLabel>

      <nav>
        <StHeaderNavul>
          <StHeaderNavUlLi>
            <NavLink exact to="/" activeStyle={activeStyle}>
              <StHomeIcon width="1.5" />
            </NavLink>
          </StHeaderNavUlLi>
          <StHeaderNavUlLi>
            <NavLink exact to="/direct" activeStyle={activeStyle}>
              <StSendIcon width="1.5" />
            </NavLink>
          </StHeaderNavUlLi>
          <StHeaderNavUlLi>
            <button onClick={handlePost}>
              <StPlusSquare width="1.5" />
            </button>
          </StHeaderNavUlLi>
          <StHeaderNavUlLi>
            <NavLink exact to="/heart" activeStyle={activeStyle}>
              <StHeartIcon width="1.5" />
            </NavLink>
          </StHeaderNavUlLi>
          <StHeaderNavUlLiMy>
            <StProfileImg
              src={userData.photoURL}
              alt="my"
              height="100%"
              onClick={profileOnClick}
            />
            {profile && (
              <StMySection>
                <StMyUl>
                  <StMyLi>
                    <Link to="">프로필</Link>
                  </StMyLi>
                  <StMyLi>
                    <Link to="">저장됨</Link>
                  </StMyLi>
                  <StMyLi>
                    <Link to="">설정</Link>
                  </StMyLi>
                  <StMyLi>
                    <Link to="">계정 전환</Link>
                  </StMyLi>
                  <StMyLi>
                    <Link to="">로그아웃</Link>
                  </StMyLi>
                </StMyUl>
              </StMySection>
            )}
          </StHeaderNavUlLiMy>
        </StHeaderNavul>
      </nav>
    </StHeaderContainer>
  );
};
export default Header;
