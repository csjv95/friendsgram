import styled from "styled-components";

export const StProfileImg = styled.img`
  height: ${({ height }) => height};
  border-radius: 50%;
  cursor: pointer;

  @media only screen and (max-width: 600px) {
    height: ${({ reHeight }) => reHeight};
  }
`;
