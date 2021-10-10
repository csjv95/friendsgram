import styled from "styled-components";

export const StMainRouterSection = styled.section`
  flex-grow: 1;
  padding-top: 6em;
  padding: ${({ padding }) => padding};
  display: flex;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.backgroundColor};

  @media only screen and (max-width: 900px) {
    padding-top: ${({ rePaddingTop }) => rePaddingTop};
  }
`;

export const StSectionControl = styled.section`
  flex-grow: 1;
  padding-top: ${({ paddingTop }) => paddingTop};
  display: flex;
  flex-wrap: wrap;
  background-color: ${({ backgroundColor }) => backgroundColor}; ;
`;
