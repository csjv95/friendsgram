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
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
`;

export const StProfileId = styled.span`
  font-weight: ${({ fontWeight }) => fontWeight};
`;

export const StProfileLocation = styled.span`
  margin: ${({ margin }) => margin};
  font-size: ${({ fontSize }) => fontSize};
`;

export const StPostText = styled.div`
  padding: ${({ padding }) => padding};
  flex-grow: ${({ flexGrow }) => flexGrow};
  border-bottom: ${({ borderBottom }) => borderBottom};
  overflow-y: auto;
`;

export const StPostFunction = styled.section`
  max-width: 37.5em;
  padding: ${({ padding }) => padding};
  display: ${({ display }) => display};
  flex-direction: column;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  border-bottom: ${({ borderBottom }) => borderBottom};
`;

export const StFunctionList = styled.ul`
  width: 100%;
  margin: ${({ margin }) => margin};
  display: flex;
  justify-content: center;
  align-items: center;

  & > :nth-child(n) {
    margin-right: 1em;
  }

  & > :last-child {
    margin: 0;
    flex-grow: 1;
    text-align: end;
  }
`;

export const StComments = styled.form`
  position: ${({ position }) => position};
  padding: ${({ padding }) => padding};
  display: ${({ display }) => display};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  border-top: ${({ borderTop }) => borderTop};
`;

export const StCommentsArea = styled.textarea`
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  flex-grow: ${({ flexGrow }) => flexGrow};
`;

export const StTextContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StDisplayName = styled.span`
  margin: 0 0.5em;
  font-size: 0.8em;
  font-weight: 600;
`;

export const StJustText = styled.div`
  /* margin: 0 0.5em; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8em;
`;

export const StMoreText = styled.div`
  /* margin: 0 0.5em; */
  display: none;
  font-size: 0.9em;
`;

export const StCommentContainer = styled.div`
  padding: ${({ padding }) => padding};
  align-items: center;
  display: flex;
`;

export const StComment = styled.pre`
  max-width: 100%;
  margin: 0;
  overflow-x: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
`;
