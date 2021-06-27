import React from "react";
import styled from "styled-components";

const StButtonStyle = styled.button`
  width: ${({ width }) => width};
  padding: ${({ padding }) => padding};
  border : ${({border}) => border};
  border-radius: 0.2em;
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
`;

const StButton = ({
  width,
  padding,
  border,
  fontSize,
  fontWeight,
  bgColor,
  color,
  btnText,
  onClick,
}) => {
 
  return (
    <StButtonStyle
      onClick={onClick}
      width={width}
      padding={padding}
      border={border}
      fontSize={fontSize}
      fontWeight={fontWeight}
      bgColor={bgColor}
      color={color}
    >
      {btnText}
    </StButtonStyle>
  );
};

export default StButton;
