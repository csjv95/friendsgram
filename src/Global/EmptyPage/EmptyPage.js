import React from "react";
import styled from "styled-components";
import { StMainRouterSection } from "../StMainRouterSection/StMainRouterSection";

const Main = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;

const Title = styled.h1`
  width: 100%;
`;

const HomeTag = styled.a`
  width: 100%;
  color: blue;
  text-decoration: underline;
`;

const EmptyPage = () => {
  return (
    <StMainRouterSection>
      <Main>
        <Title>Sorry not fuond page</Title>
        <span>If you want go to home page click</span>
        <HomeTag href="/"> here</HomeTag>
      </Main>
    </StMainRouterSection>
  );
};

export default EmptyPage;
