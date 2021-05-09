import React, { useEffect, useState } from "react";
import Header from "../../Global/Header/Header";
import MainFooter from "../../Global/MainFooter/MainFooter";
import NavRouter from "../navRouter/navRouter";
import styled from "styled-components";
import Post from "../../componet/Post/Post";
import ModalPotal from "../../modal/ModalPotal";
import Address from "../../componet/Address/Adress";
import getUserData from "../../service/fireStore/getUserData";
import getUsersList from "../../service/fireStore/getUsersList";
import getFollowingList from "../../service/follow/getFollowingList";
import getFollowerList from "../../service/follow/getFollowerList";
import { authGetUid } from "../../service/auth/authGetUid";

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
  const [currentUserUid,setCurrentUserUid] = useState("")
  const [userData, setUserData] = useState([]);
  const [usersList, setUsersList] = useState([]);
  const [followingList, setFollowingList] = useState([]);
  const [followerList, setFollowerList] = useState([]);
  const [postModal, setPostModal] = useState(false);
  const [addressModal, setAddressModal] = useState(false);
  const [location, setLocation] = useState("");
  const [imgs, setImgs] = useState([]);
  const [text, setText] = useState("");
  const [noComments, setNoComments] = useState(false);


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
          />
        </ModalPotal>
      )}
      {addressModal && (
        <ModalPotal potalName={address}>
          <Address handleAddress={handleAddress} setLocation={setLocation} />
        </ModalPotal>
      )}
      
      <Header handlePost={handlePost} />
      <NavRouter
        userData={userData}
        usersList={usersList}
        followingList={followingList}
        currentUserUid={currentUserUid}
      />
      <MainFooter />
    </AppContainer>
  );
};

export default RouteMain;
