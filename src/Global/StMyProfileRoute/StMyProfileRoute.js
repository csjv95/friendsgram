import styled from "styled-components";

export const StPostList = styled.ul`
  width: 56.25rem;
  display: flex;
  flex-wrap: wrap;

  @media only screen and (max-width: 900px) {
    width: 37.5rem;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const StPostItem = styled.li`
  position: relative;
  width: 33%;
  height: 18em;
  padding: 0.5em;
  cursor: pointer;

  @media only screen and (max-width: 600px) {
    height: 11em;
  }
`;

export const StPostButton = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 0.1em;
`;

export const StPostImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.1em;
`;
