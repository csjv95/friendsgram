import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
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

export const HeaderLogo = styled.a`
  font-family: "Cookie", cursive;
  font-size: 2em;
  color: #000000;
  text-decoration: none;
`;

export const HeaderSearch = styled.input`
  padding: 0 0.2em;
`;

export const HeaderNavul = styled.ul`
  display: flex;
  & > :nth-child(n) {
    margin-right: 1em;
  }
`;

export const HeaderNavUlLi = styled.li`
  margin-right: 0.2em;
`;

export const HeaderNavUlLiMy = styled.li`
  height: 1.3em;
`;

export const HeaderMyImg = styled.img`
  height: 100%;
  padding: 0.1em;
  border-radius: 50%;
`;