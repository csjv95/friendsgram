import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { firebaseAuth } from "../../service/firebase";
import {
  StHomeIcon,
  StSendIcon,
  StCompassIcon,
  StHeartIcon,
} from "../../Global/StIcon/StIcon";
import { StProfile } from "../../Global/StProfile/StProfile";

const HeaderContainer = styled.header`
  width: 100%;
  padding : 0.5em;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 1px solid rgb(219, 219, 219);
  margin-bottom: 4em;
  background-color: #ffffff;
`;

const HeaderLogo = styled.a`
  font-family: "Cookie", cursive;
  font-size: 2em;
  color: #000000;
  text-decoration: none;
`;

const HeaderSearch = styled.input`
  height: 1.2em;
  padding: 0.5em;
  background-color : whitesmoke;
  border : 1px solid #d3d3d3;
  border-radius : 0.2em;
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

const Header = () => {
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
              <StHomeIcon width="1.5"/>
            </NavLink>
          </HeaderNavUlLi>
          <HeaderNavUlLi>
            <NavLink exact to="/message">
              <StSendIcon width="1.5"/>
            </NavLink>
          </HeaderNavUlLi>
          <HeaderNavUlLi>
            <NavLink exact to="/upload">
              <StCompassIcon width="1.5"/>
            </NavLink>
          </HeaderNavUlLi>
          <HeaderNavUlLi>
            <NavLink exact to="/heart">
              <StHeartIcon width="1.5"/>
            </NavLink>
          </HeaderNavUlLi>
          <HeaderNavUlLiMy>
            <NavLink exact to="/my">
              <StProfile
                src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/56593842_427595071141963_9102473363216924672_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=8GvUdv2sa94AX_J7O03&oh=9a29dc6ab80091beab9f95a0f5ab8c6c&oe=6075CB7C"
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
