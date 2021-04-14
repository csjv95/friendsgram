import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { firebaseAuth } from "../../service/firebase";
import {
  StHomeIcon,
  StSendIcon,
  StUpload,
  StHeartIcon,
} from "../StIcon/StIcon";
import { StProfileImg } from "../StProfileImg/StProfileImg";

const HeaderContainer = styled.header`
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

const HeaderLogo = styled.a`
  font-family: "Cookie", cursive;
  font-size: 2em;
  color: ${({ theme }) => theme.colors.logoColor};
  text-decoration: none;
`;

const HeaderSearch = styled.input`
  height: 1.2em;
  padding: 1em;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  border: 1px solid ${({theme}) => theme.colors.borderColor};
  border-radius: 0.2em;
`;

const HeaderNavul = styled.ul`
  display: flex;
  & > :nth-child(n) {
    margin-right: 1em;
  }
`;

const HeaderNavUlLi = styled.li`
  margin-right: 0.2em;
`;

const HeaderNavUlLiMy = styled.li`
  height: 1.3em;
`;

const Header = ({handlePost}) => {
  const onLogout = () => {
    firebaseAuth.signOut();
  };

  return (
    <HeaderContainer>
      <HeaderLogo href="/home">Intstargram</HeaderLogo>
      <HeaderSearch type="text" placeholder="검색"></HeaderSearch>

      <nav>
        <HeaderNavul>
          <HeaderNavUlLi>
            <NavLink exact to="/">
              <StHomeIcon width="1.5" />
            </NavLink>
          </HeaderNavUlLi>
          <HeaderNavUlLi>
            <NavLink exact to="/direct">
              <StSendIcon width="1.5" />
            </NavLink>
          </HeaderNavUlLi>
          <HeaderNavUlLi>
            <button onClick ={handlePost}>
              <StUpload width="1.5" />
            </button>
          </HeaderNavUlLi>
          <HeaderNavUlLi>
            <NavLink exact to="/heart">
              <StHeartIcon width="1.5" />
            </NavLink>
          </HeaderNavUlLi>
          <HeaderNavUlLiMy>
            <NavLink exact to="/my">
              <StProfileImg
                src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/56593842_427595071141963_9102473363216924672_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=yyXKpuG-JU8AX8YRTka&edm=ABfd0MgAAAAA&ccb=7-4&oh=142b6867c72be34b9d9262ae9269f410&oe=609AF8FC&_nc_sid=7bff83"
                alt="my"
                height="100%"
              />
            </NavLink>
          </HeaderNavUlLiMy>
          <li>
            <button onClick={onLogout}>logout</button>
          </li>
        </HeaderNavul>
      </nav>
    </HeaderContainer>
  );
};
export default Header;
