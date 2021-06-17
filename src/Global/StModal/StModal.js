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
  background-color: rgba(125, 125, 125, 0.7);
  z-index: 9999;
`;

export const StModalMain = styled.div`
  position :relative;
  top: ${({top}) => top};
  left: ${({left})=> left};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: ${({ display }) => display};
  flex-direction: ${({ flexDirectioin }) => flexDirectioin};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  border : ${({border})=> border};
  border-radius : ${({borderRadius})=> borderRadius};
  background-color : ${({bgColor}) => bgColor};
`;

export const StModalBtn = styled.button`
  position : ${({ position }) => position};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right :${({ right }) => right};
  width : ${({ width }) => width};
  height : ${({ height }) => height};
`;
