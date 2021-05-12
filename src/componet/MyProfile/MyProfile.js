import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { StLine, StSettings } from "../../Global/StIcon/StIcon";
import { StMainRouterSection } from "../../Global/StMainRouterSection/StMainRouterSection";
import { StProfileImg } from "../../Global/StProfileImg/StProfileImg";
import MyProfileRouter from "../../routes/myProfileRouter/myProfileRouter";

const StpPofileContainer = styled.section`
  margin : 0 auto;
`;

const StTopSection = styled.section`
  width : 56.25rem;
  display: flex;
`;

const StInformation = styled.section`
  margin-left: 15em;
  display : flex;
  flex-direction : column;

  &>:nth-child(n) {
    margin: 0.5em 0;
  }
`

const StInfoTop = styled.ul`
  display : flex;
  &>:nth-child(n) {
    margin-left: 0.5em;
  }
  &:first-child {
    font-size: 2em;
  }
`

const StInfoMid = styled.ul`
  display : flex;
  &>:nth-child(n) {
    margin-left: 0.5em;
  }
`

const StInfoBottom = styled.ul`
  margin-bottom : 1em;
  display : flex;
  flex-direction : column;
  &>:nth-child(n) {
    margin-left: 0.5em;
  }

`
const StNavUl = styled.ul`
  padding-top : 1em;
  display : flex;
  justify-content : space-around;
`

const MyProfile = ({ userData,followingList,followerList }) => {
  const { name, displayName, photoURL,introduction } = userData;
  return (
    <StMainRouterSection> 
      {console.log(followingList.length)}
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
              <li>게시물</li>
              <li>팔로워 {followingList.length}</li>
              <li>팔로우 {followerList.length}</li>
            </StInfoMid>
            <StInfoBottom>
              <li>{name}</li>
              {introduction ? <li>{introduction}</li> : <div>나를 소개해주세요</div>}
            </StInfoBottom>
          </StInformation>
        </StTopSection>
        <StLine />
        <nav>
          <StNavUl>
            <li>
              <Link to="/:name">게시물</Link>
            </li>
            <li>
              <Link to="">IGTV</Link>
            </li>
            <li>
              <Link to="">저장됨</Link>
            </li>
            <li>
              <Link to="">태그됨</Link>
            </li>
          </StNavUl>
        </nav>
        <section>
          <MyProfileRouter />
        </section>
      </StpPofileContainer>
    </StMainRouterSection>
  );
};

export default MyProfile;
