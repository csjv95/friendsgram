import React, { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import {
  StBookmarkIcon,
  StLine,
  StSettings,
  StTable,
  StTag,
  StTv,
} from "../../Global/StIcon/StIcon";
import { StMainRouterSection } from "../../Global/StMainRouterSection/StMainRouterSection";
import { StProfileImg } from "../../Global/StProfileImg/StProfileImg";
import MyProfileRouter from "../../routes/myProfileRouter/myProfileRouter";
import { getMyPost } from "../../service/postData/getMyPost";
import getMatchDisplayName from "../../service/usersData/getMatchDisplayName";

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

const StEditor = styled.button`
  padding: 0.4em;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 0.2em;
  font-weight: 600;
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
  padding: 0 10em;
  display: flex;
  justify-content: space-around;

  & > :nth-child(n) {
    font-size: 0.8em;
  }
  & :nth-child(n) {
    display: flex;
    font-weight: 600;
  }
`;

const StNavLink = styled(NavLink)`
  padding-top: 1em;
  & > :first-child {
    margin-right: 0.3em;
  }
`;

const MyProfile = ({ followingList, followerList }) => {
  const params = useParams();
  const match = params.username; 
  const [matchUser, setMatchUser] = useState("");
  const [myPostData, setMyPostData] = useState([]);
  const { name, displayName, photoURL, introduction } = matchUser;
  
  useEffect(() => {
    getMatchDisplayName(match, setMatchUser);
    getMyPost(setMyPostData, match);
  }, [match]);

  const onLinkClick = () => {};

  return (
    <StMainRouterSection>
      <StpPofileContainer>
        <StTopSection>
          <StProfileImg src={photoURL} alt="my-profile-img" height="10em" />
          <StInformation>
            <StInfoTop>
              <li>{displayName}</li>
              <Link to="/edit">
                <StEditor>프로필 편집</StEditor>
              </Link>
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
              <StNavLink
                exact
                to={`/${displayName}`}
                activeStyle={{
                  borderTop: "1px solid",
                }}
              >
                <StTable width="1" />
                <div>게시물</div>
              </StNavLink>
            </li>
            <li>
              <StNavLink
                to={`/${displayName}/chanel`}
                activeStyle={{
                  borderTop: "1px solid",
                }}
              >
                <StTv width="1" />
                <div>IGTV</div>
              </StNavLink>
            </li>
            <li>
              <StNavLink
                to={`/${displayName}/saved`}
                activeStyle={{
                  borderTop: "1px solid",
                }}
              >
                <StBookmarkIcon width="1" />
                <div>저장됨</div>
              </StNavLink>
            </li>
            <li>
              <StNavLink
                to={`/${displayName}/tagged`}
                activeStyle={{
                  borderTop: "1px solid",
                }}
              >
                <StTag width="1" />
                <div>태그됨</div>
              </StNavLink>
            </li>
          </StNavUl>
        </nav>
        <section>
          <MyProfileRouter matchUser={matchUser} myPostData={myPostData} />
        </section>
      </StpPofileContainer>
    </StMainRouterSection>
  );
};

export default MyProfile;