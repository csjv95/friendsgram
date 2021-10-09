import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { StKeyFill, StSettings } from "../../Global/StIcon/StIcon";
import { StMainRouterSection } from "../../Global/StMainRouterSection/StMainRouterSection";
import EditRouter from "../../routes/editRouter/editRouter";

const StEditContainer = styled.section`
  margin: 0 auto;
  width: 56.25rem;
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  background-color: ${({ theme }) => theme.colors.contentColor};

  @media only screen and (max-width: 900px) {
    width: 100%;
    margin: 0 1em;
  }
`;

const StEditAside = styled.aside`
  width: 25%;
  border-right: 1px solid ${({ theme }) => theme.colors.borderColor};

  @media only screen and (max-width: 900px) {
    width: auto;
  }
`;

const StEditList = styled.ul``;

const StEditListItem = styled.li`
  display: flex;

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    border-left: 2px solid ${({ theme }) => theme.colors.borderColor};
  }
  .selected {
    font-weight: 600;
    border-left: 2px solid;
  }
`;

const StNavLink = styled(NavLink)`
  width: 100%;
  padding: 1em;
`;

const Edit = ({ userData, responsive }) => {
  return (
    <StMainRouterSection>
      <StEditContainer>
        <StEditAside>
          {responsive ? (
            <StEditList>
              <StEditListItem>
                <StNavLink exact to="/edit" activeClassName={"selected"}>
                  <StSettings width="1.5" />
                </StNavLink>
              </StEditListItem>
              <StEditListItem>
                <StNavLink
                  to="/edit/password/change"
                  activeClassName={"selected"}
                >
                  <StKeyFill width="1.5" />
                </StNavLink>
              </StEditListItem>
            </StEditList>
          ) : (
            <StEditList>
              <StEditListItem>
                <StNavLink exact to="/edit" activeClassName={"selected"}>
                  프로필 편집
                </StNavLink>
              </StEditListItem>
              <StEditListItem>
                <StNavLink
                  to="/edit/password/change"
                  activeClassName={"selected"}
                >
                  비밀번호 변경
                </StNavLink>
              </StEditListItem>
            </StEditList>
          )}
        </StEditAside>
        <EditRouter userData={userData} />
      </StEditContainer>
    </StMainRouterSection>
  );
};

export default Edit;
