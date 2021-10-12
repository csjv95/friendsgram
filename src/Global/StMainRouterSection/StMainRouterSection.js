import styled from "styled-components";

export const StMainRouterSection = styled.section`
  flex-grow: 1;
  padding-top: 6em;
  padding: ${({ padding }) => padding};
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.backgroundColor};

  @media only screen and (max-width: 900px) {
    padding-top: ${({ rePaddingTop }) => rePaddingTop};
  }

  @media only screen and (max-width: 600px) {
    padding-top: ${({ postPaddingTop }) => postPaddingTop};
    padding-bottom: ${({ postPaddingBottom }) => postPaddingBottom};
  }
`;

export const StSectionControl = styled.section`
  flex-grow: 1;
  padding-top: ${({ paddingTop }) => paddingTop};
  display: flex;
  flex-wrap: wrap;
  background-color: ${({ backgroundColor }) => backgroundColor}; ;
`;
