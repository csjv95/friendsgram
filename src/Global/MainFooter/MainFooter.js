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
    font-size: 0.5rem;
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
    }
  }
`;

const Select = styled.select`
  border: none;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;

const MainFooter = () => {
  return (
    <FooterCotainer>
      <FooterInfoCompany>
        <li>
          <StButton btnText="소개" />
        </li>
        <li>
          <StButton btnText="블로그" />
        </li>
        <li>
          <StButton btnText="채용정보" />
        </li>
        <li>
          <StButton btnText="도움말" />
        </li>
        <li>
          <StButton btnText="API" />
        </li>
        <li>
          <StButton btnText="개인정보처리방침" />
        </li>
        <li>
          <StButton btnText="약관" />
        </li>
        <li>
          <StButton btnText="인기계정" />
        </li>
        <li>
          <StButton btnText="해시태그" />
        </li>
        <li>
          <StButton btnText="위치" />
        </li>
      </FooterInfoCompany>

      <FooterCopyRight>
        <li>
          <Select>
            <option value="korean">한국어</option>
            <option value="english">english</option>
          </Select>
        </li>
        <li>© 2021 Outstagram from SJ</li>
      </FooterCopyRight>
    </FooterCotainer>
  );
};

export default MainFooter;
