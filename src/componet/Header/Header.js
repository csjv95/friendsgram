import React from "react";
import { NavLink } from "react-router-dom";
import { firebaseAuth } from "../../service/firebase";
import {
  HeaderContainer,
  HeaderLogo,
  HeaderSearch,
  HeaderNavul,
  HeaderNavUlLi,
  HeaderNavUlLiMy,
  HeaderMyImg,
} from "../../Global/StHeader/StHeader";
import {
  StHomeIcon,
  StSendIcon,
  StCompassIcon,
  StHeartIcon,
} from "../../Global/StIcon/StIcon";

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
              <StHomeIcon />
            </NavLink>
          </HeaderNavUlLi>
          <HeaderNavUlLi>
            <NavLink exact to="/message">
              <StSendIcon />
            </NavLink>
          </HeaderNavUlLi>
          <HeaderNavUlLi>
            <NavLink exact to="/upload">
              <StCompassIcon />
            </NavLink>
          </HeaderNavUlLi>
          <HeaderNavUlLi>
            <NavLink exact to="/heart">
              <StHeartIcon />
            </NavLink>
          </HeaderNavUlLi>
          <HeaderNavUlLiMy>
            <NavLink exact to="/my">
              <HeaderMyImg
                src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/56593842_427595071141963_9102473363216924672_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=8GvUdv2sa94AX_J7O03&oh=9a29dc6ab80091beab9f95a0f5ab8c6c&oe=6075CB7C"
                alt="my"
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
