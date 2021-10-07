import styled from "styled-components";

export const StHeaderLogo = styled.a`
  width: ${({ width }) => width};
  font-family: "Cookie", cursive;
  font-size: 2em;
  color: ${({ theme }) => theme.colors.logoColor};
  text-decoration: none;
  text-align: ${({ textAlign }) => textAlign};
`;
