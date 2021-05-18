import React from "react";
import styled from "styled-components";
import { StMainRouterSection } from "../../Global/StMainRouterSection/StMainRouterSection";
import EditRouter from "../../routes/editRouter/editRouter";

const StEditContainer = styled.section`
  margin: 0 auto;
  width: 56.25rem;
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  background-color: ${({ theme }) => theme.colors.contentColor};
`;

const StEditAside = styled.aside`
  width: 30%;
  border-right: 1px solid ${({ theme }) => theme.colors.borderColor};
`;

const Edit = ({ userData }) => {
  return (
    <StMainRouterSection>
      <StEditContainer>
        <StEditAside>
          <ul>
            <li>프로필 편집</li>
            <li>비밀번호 변경</li>
          </ul>
        </StEditAside>
        <EditRouter userData={userData} />
      </StEditContainer>
    </StMainRouterSection>
  );
};

export default Edit;
