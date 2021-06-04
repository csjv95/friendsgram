import React, { useEffect, useState } from "react";
import Header from "../../Global/Header/Header";
import MainFooter from "../../Global/MainFooter/MainFooter";
import NavRouter from "../navRouter/navRouter";
import styled from "styled-components";
import Post from "../../componet/Post/Post";
import ModalPotal from "../../modal/ModalPotal";
import Address from "../../componet/Address/Adress";
import getUserData from "../../service/fireStore/getCurrenttUserData";
import getUsersList from "../../service/fireStore/getUsersList";
import getFollowingList from "../../service/follow/getFollowingList";
import getFollowerList from "../../service/follow/getFollowerList";
import { authGetUid } from "../../service/auth/authGetUid";
import ProgressBar from "../../componet/ProgressBar/ProgressBar";
import Message from "../../Global/Message/Message";

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
`;

const RouteMain = () => {
  const post = document.getElementById("post");
  const address = document.getElementById("address");
  const message = document.getElementById("message");
  const [currentUserUid, setCurrentUserUid] = useState("");
  const [userData, setUserData] = useState([]);
  const [usersList, setUsersList] = useState([]);
  const [followingList, setFollowingList] = useState([]); //
  const [followerList, setFollowerList] = useState([]);
  const [postModal, setPostModal] = useState(false);
  const [addressModal, setAddressModal] = useState(false);
  const [messageModal, setMessageModal] = useState(false);
  const [location, setLocation] = useState("");
  const [imgs, setImgs] = useState([]);
  const [text, setText] = useState("");
  const [noComments, setNoComments] = useState(false);
  const [progressBar, setProgressBar] = useState(0);

  useEffect(() => {
    authGetUid(setCurrentUserUid);
    getUserData(setUserData);
    getUsersList(setUsersList);
    getFollowingList(setFollowingList);
    getFollowerList(setFollowerList);
  },[]);

  const handlePost = () => {
    setPostModal(!postModal);
  };
  
  const handleAddress = () => {
    setAddressModal(!addressModal);
  };
  
  console.log(followingList)
  return (
    <AppContainer>
      {postModal && (
        <ModalPotal potalName={post}>
          <Post
            imgs={imgs}
            setImgs={setImgs}
            text={text}
            setText={setText}
            noComments={noComments}
            setNoComments={setNoComments}
            handlePost={handlePost}
            handleAddress={handleAddress}
            location={location}
            setProgressBar={setProgressBar}
          />
        </ModalPotal>
      )}
      {addressModal && (
        <ModalPotal potalName={address}>
          <Address handleAddress={handleAddress} setLocation={setLocation} />
        </ModalPotal>
      )}
      {messageModal && (
        <ModalPotal potalName={message}>
          <Message />
        </ModalPotal>
      )}
      {progressBar && <ProgressBar progressBar={progressBar} />}
      <Header
        handlePost={handlePost}
        userData={userData}
        usersList={usersList}
      />
      <NavRouter
        userData={userData}
        usersList={usersList}
        followingList={followingList}
        followerList={followerList}
        currentUserUid={currentUserUid}
      />
      <MainFooter />
    </AppContainer>
  );
};

export default RouteMain;
