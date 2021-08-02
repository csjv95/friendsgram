import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
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
} from '../StIcon/StIcon'
import { StProfileImg } from '../StProfileImg/StProfileImg'
import Search from '../../componet/Search/Search'
import { authLogout } from '../../service/auth/authLogout'
import setSearchRecord from '../../service/search/setSearchRecord'
import { StRectangle, StTriangle } from '../StBubbleChat/BubbleChat'
import { Theme } from '../../style/Theme'


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
`

const StHeaderLogo = styled.a`
  font-family: 'Cookie', cursive;
  font-size: 2em;
  color: ${({ theme }) => theme.colors.logoColor};
  text-decoration: none;
`

const StHeaderSearchLabel = styled.label`
  position: relative;
`

const StHeaderSearch = styled.input`
  height: 1.2em;
  padding: 1em;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 0.2em;
`

const StHeaderNav = styled.nav`
  position: relative;
`

const StHeaderNavul = styled.ul`
  display: flex;
  & > :nth-child(n) {
    margin-right: 1em;
  }
`

const StHeaderNavUlLi = styled.li`
  margin-right: 0.2em;
`

const StHeaderNavUlLiMy = styled.li`
  height: 1.5em;
`

const StMyUl = styled.ul`
  margin: 0.5em 0;
  display: flex;
  flex-direction: column;
`

const StMyLi = styled.li`
  padding: 0.2em 0.5em;
  font-weight: 500;
  transition: all 300ms ease-in;
  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundColor};
  }
`

const StLink = styled(Link)`
  display: flex;
  justify-content: space-between;
`

const StLogoutBtn = styled.button`
  width: 100%;
`

const Header = ({ handleUpload, userData, usersList }) => {
  const { displayName } = userData
  const [search, setSearch] = useState(false) // when clcked the search input box show record
  const [searchText, setSearchText] = useState('') //when typing at search input box
  const [profile, setProfile] = useState(false)

  const onSearchChange = (event) => {
    const text = event.target.value;
    setSearchText(text);
  };

  const profileOnClick = () => {
    setProfile(!profile)
  }

  const onLogout = () => {
    authLogout()
  }

  const onSearchSubmit = (event) => {
    event.preventDefault()
    setSearchRecord(searchText)
  }

  const activeStyle = {
    padding: `0.2em 0.2em 0.3em 0.2em`,
    border: `1px solid`,
    borderRadius: `50%`,
  }

  const onSearchClick = () => {
    setSearch(!search)
  }
  return (
    <StHeaderContainer>
      <StHeaderLogo href="/">Friendsgram</StHeaderLogo>
      <form onSubmit={onSearchSubmit}>
        <StHeaderSearchLabel htmlFor="search" onClick={onSearchClick}>
          <StHeaderSearch
            id="search"
            type="search"
            placeholder="검색"
            onChange={onSearchChange}
            autoComplete="off"
          />
          {search && <Search searchText={searchText} />}
        </StHeaderSearchLabel>
      </form>

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
            <button
              onClick={() => {
                handleUpload()
              }}
            >
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
          <>
            <StTriangle
              top="2em"
              left="9.7em"
              borderTop="1em solid none"
              borderBottom={`0.8em solid ${Theme.colors.contentColor}`}
              borderLeft="0.8em solid transparent;"
              borderRight="0.8em solid transparent;"
            />
            <StRectangle top="2.4em" width="13em" height="auto">
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
                  <StLink exact="ture" to="/edit">
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
                  <StLogoutBtn onClick={onLogout}>로그아웃</StLogoutBtn>
                </StMyLi>
              </StMyUl>
            </StRectangle>
          </>
        )}
      </StHeaderNav>
    </StHeaderContainer>
  )
}
export default Header
