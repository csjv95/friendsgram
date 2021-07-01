import React from "react";
import styled from "styled-components";

const StButtonStyle = styled.button`
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  right: ${({ right }) => right};
  left: ${({ left }) => left};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
  border: ${({ border }) => border};
  border-radius: 0.2em;
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
`;

const StButton = ({
  position,
  top,
  bottom,
  right,
  left,
  width,
  height,
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
      position={position}
      top={top}
      bottom={bottom}
      right={right}
      left={left}
      width={width}
      height={height}
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
