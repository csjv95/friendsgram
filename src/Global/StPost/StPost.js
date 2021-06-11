import styled from "styled-components";

export const StPostHeader = styled.header`
  padding: ${({ padding }) => padding};
  display: ${({ display }) => display};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
`;

export const StProfileContainer = styled.div`
  height: ${({ height }) => height};
  display: ${({ display }) => display};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
`;

export const StProfileInfo = styled.div`
  margin: ${({ margin }) => margin};
  display: ${({ display }) => display};
  flex-direction :${({flexDirection}) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
`;

export const StProfileId = styled.span`
  font-weight: ${({ fontWeight }) => fontWeight};
`;

export const StProfileLocation = styled.span`
  margin: ${({ margin }) => margin};
  font-size: ${(fontSize) => fontSize};
`;

export const StPostText = styled.div`
  flex-grow: ${({ flexGrow }) => flexGrow};
  border-bottom: ${({ borderBottom }) => borderBottom};
  overflow-y : auto;
`;

export const StPostFunction = styled.section`
  padding: ${({ padding }) => padding};
  display: ${({ display }) => display};
  flex-direction: column;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  border-bottom: ${({borderBottom}) => borderBottom};
`;

export const StFunctionList = styled.ul`
  width: 100%;
  display: flex;
  justify-content:center;
  align-items : center;

  & > :nth-child(n) {
    margin-right : 1em;
  }

  & > :last-child {
    margin : 0;
    flex-grow: 1;
    text-align: end;
  }
`;

export const StComments = styled.form`
  padding: ${({ padding }) => padding};
  display: ${({ display }) => display};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
`;

export const StCommentsArea = styled.textarea`
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  flex-grow: ${({ flexGrow }) => flexGrow};
`;
