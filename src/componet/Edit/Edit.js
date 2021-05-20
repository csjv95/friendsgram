import React from "react";
import { NavLink } from "react-router-dom";
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

const StNavLink = styled(NavLink)`
  margin : 1em;
`
const navStyle = {
  borderLeft : `1px solid red`
}

const Edit = ({ userData }) => {
  return (
    <StMainRouterSection>
      <StEditContainer>
        <StEditAside>
          <ul>
            <li><StNavLink to="/edit" activeStyle={navStyle}>프로필 편집</StNavLink></li>
            <li><StNavLink to="/edit/password/change" activeStyle={navStyle}>비밀번호 변경</StNavLink></li>
          </ul>
        </StEditAside>
        <EditRouter userData={userData} />
      </StEditContainer>
    </StMainRouterSection>
  );
};

export default Edit;
