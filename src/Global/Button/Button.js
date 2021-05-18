import React from "react";
import styled from "styled-components";

const StButton = styled.button`
  width: ${({ width }) => width};
  padding: ${({ padding }) => padding};
  border-radius: 0.2em;
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.contentColor};
`;

const Button = ({ btnText,width,padding }) => {
  return <StButton width={width} padding={padding}>{btnText}</StButton>;
};

export default Button;
