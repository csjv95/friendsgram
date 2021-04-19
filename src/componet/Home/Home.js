import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { StMainRouterSection } from "../../Global/StMainRouterSection/StMainRouterSection";
import getUserData from "../../service/fireStore/getUserData";
import getPostData from "../../service/fireStore/getPostData";
import HomeArticle from "./HomeArticle";
import HomeFollow from "./HomeFollow";

const StHomeContainer = styled.section`
  margin: 0 auto;
  display: flex;
`;

const StArticleList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const StFollowerCotainer = styled.section`
  width: 18.3125rem;
  display: flex;
  justify-content: center;
`;

const Home = () => {
  const [userData, setUserData] = useState([]);
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    getUserData(setUserData);
    getPostData(setPostData);
  }, []);

  return (
    <StMainRouterSection>
      <StHomeContainer>
        <StArticleList>
          {postData.map((article, index) => (
            <HomeArticle key={index} article={article} />
          ))}
        </StArticleList>
        <StFollowerCotainer>
          <HomeFollow userData={userData}/>
        </StFollowerCotainer>
      </StHomeContainer>
    </StMainRouterSection>
  );
};

export default Home;
