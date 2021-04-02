import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { StMainRouterSection } from "../../Global/StMainRouterSection/StMainRouterSection";
import homeData from "../../service/routeData/homeData";
import HomeArticle from "./HomeArticle";
import HomeFollow from "./HomeFollow";

const StHomeContainer = styled.section`
  margin: 0 auto;
  display: flex;
`;

const StArticleList = styled.ul`
  display : flex;
  flex-direction : column;
`;

const StFollowerCotainer = styled.section`
  width: 18.3125rem;
  display: flex;
  justify-content: center;
`;

const Home = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    homeData(setUserData);
  }, []);

  return (
    <StMainRouterSection>
      <StHomeContainer>
        <StArticleList>
          <HomeArticle />
          <HomeArticle />
          <HomeArticle />
          <HomeArticle />
        </StArticleList>
        <StFollowerCotainer>
          <HomeFollow />
        </StFollowerCotainer>
      </StHomeContainer>
    </StMainRouterSection>
  );
};

export default Home;
