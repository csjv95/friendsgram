import React from "react";
import styled from "styled-components";

const FooterCotainer = styled.footer`
  margin: 0 auto;
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
  margin : 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  & > :nth-child(n) {
    padding-right: 1em;
    font-size: small;
  }
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
          <select>
            <option value="korean">한국어</option>
            <option value="english">english</option>
          </select>
        </li>
        <li>© 2021 Outstagram from SJ</li>
      </FooterCopyRight>
    </FooterCotainer>
  );
};

export default MainFooter;
