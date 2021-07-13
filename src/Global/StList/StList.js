import styled from "styled-components";

export const StList = styled.ul`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  display: ${({ display }) => display};
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  border-bottom: ${({ borderBottom }) => borderBottom};
  font-weight: ${({ fontWeight }) => fontWeight};
  overflow-y: ${({ overFlowY }) => overFlowY};
`;

export const StItem = styled.li`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  display: ${({ display }) => display};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  flex-grow: ${({ flexGrow }) => flexGrow};
  text-align: ${({ textAlign }) => textAlign};
  border-bottom: ${({ borderBottom }) => borderBottom};
  overflow-y: ${({ overFlowY }) => overFlowY};
`;

export const StTitle = styled.h1`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
`;
