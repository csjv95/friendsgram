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
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  border: ${({ border }) => border};
  border-radius: 0.2em;
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  cursor: ${({ cursor }) => cursor};

  @media only screen and (max-width: 450px) {
    font-size: ${({ refontSize }) => refontSize};
    background-color: ${({ rebgc }) => rebgc};
  }
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
  margin,
  border,
  fontSize,
  fontWeight,
  bgColor,
  color,
  btnText,
  onClick,
  refontSize,
  cursor,
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
      margin={margin}
      border={border}
      fontSize={fontSize}
      fontWeight={fontWeight}
      bgColor={bgColor}
      color={color}
      cursor={cursor}
      refontSize={refontSize}
    >
      {btnText}
    </StButtonStyle>
  );
};

export default StButton;
