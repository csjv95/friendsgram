import React, { useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import {
  StHomeIcon,
  StSendIcon,
  StPlusSquare,
  StHeartIcon,
  StUserCircle,
  StBookmarkIcon,
  StSettings,
  StTransfer,
  StLine,
} from "../StIcon/StIcon";
import { StProfileImg } from "../StProfileImg/StProfileImg";
import Search from "../../componet/Search/Search";
import SearchRecord from "../../componet/Search/SearchRecord";
import { authLogout } from "../../service/auth/authLogout";

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

const StHeaderNav = styled.nav`
  position: relative;
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
  position: absolute;
  top: 2.4em;
  width: 13em;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: ${({ theme }) => theme.colors.borderRadius};
  background-color: ${({ theme }) => theme.colors.contentColor};
`;

const StMyUl = styled.ul`
  display: flex;
  flex-direction: column;
`;

const StMyLi = styled.li`
  padding: 0.2em 0.5em;
  font-weight: 500;
  transition: all 300ms ease-in;
  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundColor};
  }
`;

const StLink = styled(Link)`
  display: flex;
  justify-content: space-between;
`;

const StLogoutBtn = styled.button`
  width : 100%;
`

const Header = ({ handlePost, userData }) => {
  const {displayName} = userData;
  const [search, setSearch] = useState(false);
  const [headerText, setHeaderText] = useState("");
  const [profile, setProfile] = useState(false);
  const [currentEvent, setCurrentEvent] = useState();

  const onSearchChange = (event) => {
    const text = event.target.value;
    setHeaderText(text);
    setSearch(false);
  };

  const profileOnClick = () => {
    setProfile(!profile);
  };

  const onFocus = (event) => {
    setCurrentEvent(event.target);
    setSearch(!search);
  };

  const onBlur = (event) => {
    setSearch(!search);
    
  };

  const onLogout = () => {
    authLogout();
  };

  const activeStyle = {
    padding: `0.2em 0.2em 0.3em 0.2em`,
    border: `1px solid`,
    borderRadius: `50%`,
  };

  return (
    <StHeaderContainer>
      <StHeaderLogo href="/">Intstargram</StHeaderLogo>
      <StHeaderSearchLabel htmlFor="search">
        <StHeaderSearch
          id="search"
          type="search"
          placeholder="검색"
          onChange={onSearchChange}
          autoComplete="off"
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {search && <SearchRecord currentEvent={currentEvent} />}
        {headerText && <Search headerText={headerText} />}
      </StHeaderSearchLabel>

      <StHeaderNav>
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
          </StHeaderNavUlLiMy>
        </StHeaderNavul>
        {profile && (
          <StMySection>
            <StMyUl onClick={profileOnClick}>
              <StMyLi>
                <StLink to={`/${displayName}`}>
                  <StUserCircle width="1.5" />
                  <div>프로필</div>
                </StLink>
              </StMyLi>
              <StMyLi>
                <StLink to={`/${displayName}/saved`}>
                  <StBookmarkIcon width="1.5" />
                  <div>저장됨</div>
                </StLink>
              </StMyLi>
              <StMyLi>
                <StLink to="/edit">
                  <StSettings width="1.5" />
                  <div>설정</div>
                </StLink>
              </StMyLi>
              <StMyLi>
                <StLink to="/">
                  <StTransfer width="1.5" />
                  <div>계정 전환</div>
                </StLink>
              </StMyLi>
              <StLine />
              <StMyLi>
                <StLogoutBtn onClick={onLogout} >로그아웃</StLogoutBtn>
              </StMyLi>
            </StMyUl>
          </StMySection>
        )}
      </StHeaderNav>
    </StHeaderContainer>
  );
};
export default Header;
