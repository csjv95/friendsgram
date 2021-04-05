import React from "react";
import styled from "styled-components";

const FooterCotainer = styled.footer`
  padding-bottom: 3em;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  & :nth-child(n) {
    color: ${({ theme }) => theme.colors.textColorLihgtgrey};
  }
`;

const FooterInfoCompany = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
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
          <button>소개</button>
        </li>
        <li>
          <button>블로그</button>
        </li>
        <li>
          <button>채용정보</button>{" "}
        </li>
        <li>
          <button>도움말</button>
        </li>
        <li>
          <button>API</button>
        </li>
        <li>
          <button>개인정보처리방침</button>
        </li>
        <li>
          <button>약관</button>
        </li>
        <li>
          <button>인기계정</button>{" "}
        </li>
        <li>
          <button>해시태그</button>
        </li>
        <li>
          <button>위치</button>
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
