import React from "react";
import styled from "styled-components";
import { StMainRouterSection } from "../../Global/StMainRouterSection/StMainRouterSection";
import { StProfileImg } from "../../Global/StProfileImg/StProfileImg";

const StEditContainer = styled.section`
  margin: 0 auto;
  width: 56.25rem;
  display : flex;
  border: 1px solid  ${({theme})=> theme.colors.borderColor};
  background-color : ${({theme})=> theme.colors.contentColor};
`;

const StEditAside = styled.aside`
  width : 30%;
  border-right : 1px solid ${({theme})=> theme.colors.borderColor};
`

const StEditMain = styled.main`
  width : 70%;
`

const Edit = ({ userData }) => {
  const {photoURL, displayName} = userData;
  return (
    <StMainRouterSection>
      <StEditContainer>
        <StEditAside>
          <ul>
            <li>프로필 편집</li>
            <li>비밀번호 변경</li>
          </ul>
        </StEditAside>
        <StEditMain>
          <div>
          <StProfileImg
            src={photoURL}
            alt="my-profile-img"
            height="5em"
          />
          <ul>
            <li>{displayName}</li>
            <li>프로필사진 바꾸기</li>
          </ul>
          </div>
        </StEditMain>
      </StEditContainer>
    </StMainRouterSection>
  );
};

export default Edit;
