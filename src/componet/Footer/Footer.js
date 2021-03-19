import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StFooterEl>
      <StFooterUl>
        <StFooterLi>소개</StFooterLi>
        <StFooterLi>블로그</StFooterLi>
        <StFooterLi>채용 정보</StFooterLi>
        <StFooterLi>도움말</StFooterLi>
        <StFooterLi>API</StFooterLi>
        <StFooterLi>개인정보처리방침</StFooterLi>
        <StFooterLi>약관</StFooterLi>
        <StFooterLi>인기 계정</StFooterLi>
        <StFooterLi>해시태크</StFooterLi>
        <StFooterLi>위치</StFooterLi>
      </StFooterUl>

      <StFooterUl>
        <StFooterLi>뷰티</StFooterLi>
        <StFooterLi>댄스 및 공연</StFooterLi>
        <StFooterLi>피트니스</StFooterLi>
        <StFooterLi>식음료</StFooterLi>
        <StFooterLi>집 및 정원</StFooterLi>
        <StFooterLi>음악</StFooterLi>
        <StFooterLi>시각 예술</StFooterLi>
      </StFooterUl>

      <StFooterUl>
        <StFooterLi>
          <StLanguage name="languge">
            <option value="korean">한국어</option>
            <option value="english">Engilsh</option>
          </StLanguage>
        </StFooterLi>
        <StFooterLi>© 2021 Instagram from fackebook</StFooterLi>
      </StFooterUl>
    </StFooterEl>
  );
};

const StFooterEl = styled.footer`
  padding: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: whitesmoke;
`;

const StFooterUl = styled.ul`
  margin: 0.2em 0;
  display: flex;
  &:last-child {
    margin-top: 1em;
  }
`;

const StFooterLi = styled.li`
  margin: 0 0.5em;
  font-size: 0.7em;
  color: #808080;
`;

const StLanguage = styled.select`
  border: none;
  background-color: transparent;
  font-size: 0.8em;
  color: #808080;
`;

export default Footer;
