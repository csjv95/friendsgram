import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { StMainRouterSection } from "../../Global/StMainRouterSection/StMainRouterSection";
import getPostData from "../../service/fireStore/getPostData";
import PostCol from "./PostCol";
import HomeFollow from "./HomeFollow";
import ContainerPostCol from "../../containers/post/ContainerPostCol";

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

const Home = ({
  userData,
  usersList,
  followingList,
  handlePostMenu,
  setClickedPostId,
  setClickedPostUid,
  changeSendModal,
}) => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    getPostData(setPostData, followingList);
  }, [followingList]);

  return (
    <StMainRouterSection>
      <StHomeContainer>
        <StArticleList>
          {postData.map((article, index) => (
            <ContainerPostCol
              key={index}
              article={article}
              followingList={followingList}
              handlePostMenu={handlePostMenu}
              setClickedPostId={setClickedPostId}
              setClickedPostUid={setClickedPostUid}
              changeSendModal={changeSendModal}
            />
          ))}
        </StArticleList>
        <StFollowerCotainer>
          <HomeFollow
            userData={userData}
            usersList={usersList}
            followingList={followingList}
          />
        </StFollowerCotainer>
      </StHomeContainer>
    </StMainRouterSection>
  );
};

export default Home;
