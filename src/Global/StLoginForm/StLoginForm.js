import styled from "styled-components";

export const StContainerDiv = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const StLoginSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  flex-grow: 1;
`;

export const StLoginFormUp = styled.form`
  max-width: 20em;
  padding: 3em 3em 1em 3em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  background-color: ${({ theme }) => theme.colors.contentColor};
`;

export const StTitle = styled.h1`
  margin: 1em;
  font-family: "Cookie", cursive;
  font-size: 3em;
  font-weight: 600;
`;

export const StLoginInput = styled.input`
  width: 100%;
  margin: 0.5em 0;
  padding: 0.5em;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;

export const StLoginFormDown = styled.form`
  width: 100%;
  max-width: 20em;
  margin-top: 1em;
  padding: 1em 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  background-color: ${({ theme }) => theme.colors.contentColor};
`;

export const StAccessBtn = styled.button`
  width: 100%;
  padding: 0.5em;
  margin-bottom: 0.5em;
  border-radius: 0.3em;
  color: ${({ theme }) => theme.colors.textColorWhite};
  background-color: ${({ theme }) => theme.colors.skyblue};
  font-weight: 600;
  transition: color 300ms ease-in;

  :hover {
    color: blue;
  }
`;

export const SyAccessDiv = styled.div`
  text-align: center;
  font-size: 0.7em;
`;

export const StContainerOr = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const LineLi = styled.li`
  margin: 0 0.5em;
  border-top: 1px solid 1px solid ${({ theme }) => theme.colors.borderColor};
  flex-grow: 1;
`;

export const StAuthLoginBtn = styled.button`
  width: 100%;
  padding: 0.2em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1em;
  font-weight: 600;
`;

export const StPwSpan = styled.span`
  margin-top: 1.5em;
  font-size: 0.7em;
`;

export const StSignUpSpan = styled.div`
  font-size: 0.8em;
  & > Link {
    text-decoration: none;
  }
`;
