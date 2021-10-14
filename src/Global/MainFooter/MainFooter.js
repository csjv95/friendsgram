import React from "react";
import styled from "styled-components";
import StButton from "../StButton/StButton";

const FooterCotainer = styled.footer`
  padding-top: 2rem;
  padding-bottom: 3rem;
  background-color: ${({ theme }) => theme.colors.backgroundColor};

  & :nth-child(n) {
    color: ${({ theme }) => theme.colors.textColorLihgtgrey};
  }

  @media only screen and (max-width: 450px) {
    padding: 1rem;
    font-size: 0.9em;
  }
`;

const FooterInfoCompany = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  & > :nth-child(n) {
    padding-right: 1em;
    font-size: small;
  }
`;

const FooterCopyRight = styled.ul`
  margin: 1em;
  display: flex;
  justify-content: center;
  align-items: center;

  & > :nth-child(n) {
    padding-right: 1em;
    font-size: small;
  }

  @media only screen and (max-width: 450px) {
    & > :nth-child(n) {
      padding-right: 0.5em;
      font-size: 0.9em;
    }
  }
`;

const Select = styled.select`
  border: none;
  background-color: ${({ theme }) => theme.colors.backgroundColor};

  @media only screen and (max-width: 450px) {
    font-size: 0.9em;
  }
`;

const MainFooter = () => {
  const footerList = [
    { text: "소개", index: 0 },
    { text: "블로그", index: 1 },
    { text: "채용정보", index: 2 },
    { text: "도움말", index: 3 },
    { text: "API", index: 4 },
    { text: "개인정보처리방침", index: 5 },
    { text: "약관", index: 6 },
    { text: "인기계정", index: 7 },
    { text: "해시태그", index: 8 },
    { text: "위치", index: 9 },
  ];
  return (
    <FooterCotainer>
      <FooterInfoCompany>
        {footerList.map((item) => (
          <li key={item.index}>
            <StButton btnText={item.text} refontSize="0.5em" rebgc="red" />
          </li>
        ))}
      </FooterInfoCompany>

      <FooterCopyRight>
        <li>
          <Select>
            <option value="korean">한국어</option>
            <option value="english">english</option>
          </Select>
        </li>
        <li>© 2021 Friendsgram from SJ</li>
      </FooterCopyRight>
    </FooterCotainer>
  );
};

export default MainFooter;
