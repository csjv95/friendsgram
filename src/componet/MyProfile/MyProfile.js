import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  StImageMultiple,
  StLine,
  StSettings,
} from "../../Global/StIcon/StIcon";
import { StMainRouterSection } from "../../Global/StMainRouterSection/StMainRouterSection";
import { StProfileImg } from "../../Global/StProfileImg/StProfileImg";
import MyProfileRouter from "../../routes/myProfileRouter/myProfileRouter";
import { getMyPost } from "../../service/postData/getMyPost";

const StpPofileContainer = styled.section`
  margin: 0 auto;
`;

const StTopSection = styled.section`
  width: 56.25rem;
  margin-bottom: 2em;
  display: flex;
`;

const StInformation = styled.section`
  margin-left: 10em;
  display: flex;
  flex-direction: column;

  & > :nth-child(n) {
    margin: 0.5em 0;
  }
  & > :first-child {
    margin-top: 0;
  }
`;

const StInfoTop = styled.ul`
  display: flex;
  & > :nth-child(n) {
    margin-right: 0.5em;
  }
  &:first-child {
    font-size: 2em;
  }
`;

const StInfoMid = styled.ul`
  display: flex;
  & > :nth-child(n) {
    margin-right: 0.5em;
  }
`;

const StInfoBottom = styled.ul`
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
  & > :nth-child(n) {
    margin-right: 0.5em;
  }
`;

const StNavUl = styled.ul`
  width: 56.25rem;
  display: flex;
  justify-content: space-around;

  & > :nth-child(n) {
    padding-top: 1em;
  }
`;

const StPostList = styled.ul`
  width: 56.25rem;
  display: flex;
`;

const StPostItem = styled.li`
  position: relative;
  width: 33%;
  height: 14em;
  padding: 0.5em;
`;

const StPostImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.1em;
`;

const MyProfile = ({ userData, followingList, followerList, match }) => {
  const [myPostData, setMyPostData] = useState([]);
  const { name, displayName, photoURL, introduction } = userData;

  useEffect(() => {
    getMyPost(setMyPostData);
  }, []);

  const onLinkClick = () => {};

  return (
    <StMainRouterSection>
      <StpPofileContainer>
        <StTopSection>
          <StProfileImg src={photoURL} alt={photoURL} height="10em" />
          <StInformation>
            <StInfoTop>
              <li>{displayName}</li>
              <li>
                <button>프로필 편집</button>
              </li>
              <li>
                <StSettings width="1" />
              </li>
            </StInfoTop>
            <StInfoMid>
              <li>게시물 {myPostData.length}</li>
              <li>팔로워 {followingList.length}</li>
              <li>팔로우 {followerList.length}</li>
            </StInfoMid>
            <StInfoBottom>
              <li>{name}</li>
              {introduction ? (
                <li>{introduction}</li>
              ) : (
                <div>나를 소개해주세요</div>
              )}
            </StInfoBottom>
          </StInformation>
        </StTopSection>
        <StLine />
        <nav>
          <StNavUl onClick={onLinkClick}>
            <li>
              <Link to={`/${displayName}`}>게시물</Link>
            </li>
            <li>
              <Link to={`/${displayName}/chanel`}>IGTV</Link>
            </li>
            <li>
              <Link to={`/${displayName}/saved`}>저장됨</Link>
            </li>
            <li>
              <Link to={`/${displayName}/tagged`}>태그됨</Link>
            </li>
          </StNavUl>
        </nav>
        <section>
          <MyProfileRouter userData={userData} />
          <StPostList>
            {myPostData.map((data,postId) => (
              <StPostItem key={postId}>
                <StPostImg src={data.imgsData[0].imgUrl} alt="data" />
                {data.imgsData.length > 1 && (
                  <StImageMultiple
                    width="1.4"
                    color="white"
                    position="absolute"
                    top="14"
                    right="14"
                  />
                )}
              </StPostItem>
            ))}
          </StPostList>
        </section>
      </StpPofileContainer>
    </StMainRouterSection>
  );
};

export default MyProfile;
