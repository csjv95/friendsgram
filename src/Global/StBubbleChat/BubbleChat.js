import styled from "styled-components";

export const StTriangle = styled.div`
  position: absolute;
  top: ${({top}) => top};
  left: ${({left}) => left};
  border-top: ${({borderTop}) => borderTop};
  border-bottom: ${({borderBottom}) => borderBottom};
  border-left: ${({borderLeft}) => borderLeft};
  border-right: ${({borderRight}) => borderRight};
  z-index: 1000;
`;

export const StRectangle = styled.section`
  position: absolute;
  top: ${({top}) => top};
  left: ${({left}) => left};
  width: ${({width}) => width};
  height: ${({height}) => height};
  overflow-y : scroll;
  border-radius: ${({ theme }) => theme.colors.borderRadius};
  background-color: ${({ theme }) => theme.colors.contentColor};
  box-shadow: 3px -2px 7px 1px rgb(236 219 219 / 60%);
`;

