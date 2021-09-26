import React, { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import EmptyPage from "../../Global/EmptyPage/EmptyPage";
import Empty from "../../Global/Empty/Empty";
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
import getBookMarkPost from "../../service/bookMark/getBookMarkPost";
import StButton from "../../Global/StButton/StButton";
import { Theme } from "../../style/Theme";
import setFollow from "../../service/follow/setFollow";

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

const MyProfile = ({
  followingList,
  followerList,
  currentUserUid,
  bookMarkPostIds,
  handlePostMenu,
  handleFollow,
  handleSend,
  setClickedPostId,
  setClickedPostUid,
  setIsFollow,
}) => {
  const post = document.getElementById("post");
  const params = useParams();
  const match = params.username;
  const [matchUser, setMatchUser] = useState("");
  const [myPostData, setMyPostData] = useState([]);
  const [bookMarkPosts, setBookMarkPosts] = useState();
  const [postModal, setPostModal] = useState(false);

  useEffect(() => {
    getMatchDisplayName(match, setMatchUser);
    getMyPost(setMyPostData, match);
    getBookMarkPost(bookMarkPostIds, setBookMarkPosts);
  }, [match, bookMarkPostIds]);

  const handlePost = () => {
    setPostModal(!postModal);
  };

  const followBtn = () => {
    setFollow(currentUserUid, followingList);
  };

  return (
    <>
      {matchUser ? (
        <StMainRouterSection>
          <StpPofileContainer>
            <StTopSection>
              <StProfileImg
                src={matchUser.photoURL}
                alt="my-profile-img"
                height="10em"
              />
              <StInformation>
                <StInfoTop>
                  <li>{matchUser.displayName}</li>
                  {matchUser.uid === currentUserUid ? (
                    <li>
                      <Link to="/edit">
                        <StButton
                          width="100%"
                          padding="0.4em"
                          border={`1px solid ${Theme.colors.borderColor}`}
                          fontWeight="600"
                          btnText="프로필 편집"
                        />
                      </Link>
                    </li>
                  ) : (
                    <li onClick={followBtn}>
                      <StButton
                        padding="0.4em 1.8em"
                        fontSize="0.5em"
                        fontWeight="600"
                        color={Theme.colors.contentColor}
                        bgColor={Theme.colors.btnColor}
                        btnText={
                          followingList.includes(currentUserUid)
                            ? "언팔로우"
                            : "팔로우"
                        }
                      />
                    </li>
                  )}
                  <li>
                    <StSettings width="1" />
                  </li>
                </StInfoTop>
                <StInfoMid>
                  <li>게시물 {myPostData.length}</li>
                  <li
                    onClick={() => {
                      setIsFollow("팔로워");
                      handleFollow();
                    }}
                  >
                    <StButton
                      width="100%"
                      fontSize="1em"
                      btnText={`팔로워 ${followerList.length}`}
                    />
                  </li>
                  <li
                    onClick={() => {
                      setIsFollow("팔로우");
                      handleFollow();
                    }}
                  >
                    <StButton
                      width="100%"
                      fontSize="1em"
                      btnText={`팔로우 ${followingList.length}`}
                    />
                  </li>
                </StInfoMid>
                <StInfoBottom>
                  <li>{matchUser.name}</li>
                  {matchUser.introduction ? (
                    <li>{matchUser.introduction}</li>
                  ) : (
                    <div>나를 소개해주세요</div>
                  )}
                </StInfoBottom>
              </StInformation>
            </StTopSection>
            <StLine />

            <nav>
              <StNavUl>
                <li>
                  <StNavLink
                    exact
                    to={`/${matchUser.displayName}`}
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
                    to={`/${matchUser.displayName}/chanel`}
                    activeStyle={{
                      borderTop: "1px solid",
                    }}
                  >
                    <StTv width="1" />
                    <div>IGTV</div>
                  </StNavLink>
                </li>
                {currentUserUid === matchUser.uid ? (
                  <li>
                    <StNavLink
                      to={`/${matchUser.displayName}/saved`}
                      activeStyle={{
                        borderTop: "1px solid",
                      }}
                    >
                      <StBookmarkIcon width="1" />
                      <div>저장됨</div>
                    </StNavLink>
                  </li>
                ) : (
                  <Empty />
                )}
                <li>
                  <StNavLink
                    to={`/${matchUser.displayName}/tagged`}
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
              <MyProfileRouter
                post={post}
                matchUser={matchUser}
                myPostData={myPostData}
                currentUserUid={currentUserUid}
                bookMarkPostIds={bookMarkPostIds}
                postModal={postModal}
                handlePost={handlePost}
                bookMarkPosts={bookMarkPosts}
                handlePostMenu={handlePostMenu}
                setClickedPostId={setClickedPostId}
                setClickedPostUid={setClickedPostUid}
                handleSend={handleSend}
              />
            </section>
          </StpPofileContainer>
        </StMainRouterSection>
      ) : (
        <EmptyPage />
      )}
    </>
  );
};

export default MyProfile;
