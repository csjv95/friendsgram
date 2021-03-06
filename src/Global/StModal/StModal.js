import styled from "styled-components";

export const StModalContainer = styled.section`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: ${({ display }) => display};
  flex-direction: ${({ flexDirectioin }) => flexDirectioin};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  background-color: ${({ bgColor }) => bgColor};
  z-index: 999999;

  @media only screen and (max-width: 900px) {
    background-color: ${({ postModal }) => postModal};
  }

  @media only screen and (max-width: 600px) {
    display: ${({ sendModaldisplay }) => sendModaldisplay};
    left: ${({ sendModalLeft }) => sendModalLeft};
    top: ${({ sendModalTop }) => sendModalTop};
  }
`;

export const StModalMain = styled.div`
  position: relative;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  height: ${({ height }) => height};
  display: ${({ display }) => display};
  flex-direction: ${({ flexDirectioin }) => flexDirectioin};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({ bgColor }) => bgColor};

  @media only screen and (max-width: 600px) {
    width: ${({ sendModalWidth }) => sendModalWidth};
    border-radius: ${({ sendModalborderRadius }) => sendModalborderRadius};
    height: ${({ sendModalborderHeight }) => sendModalborderHeight};
  }
`;

export const StModalBtn = styled.button`
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;
