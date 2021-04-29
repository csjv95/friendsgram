import React, { useEffect, useState } from "react";
import Header from "../../Global/Header/Header";
import MainFooter from "../../Global/MainFooter/MainFooter";
import NavRouter from "../navRouter/navRouter";
import styled from "styled-components";
import Post from "../../componet/Post/Post";
import ModalPotal from "../../modal/ModalPotal";
import Address from "../../componet/Address/Adress";
import getUserData from "../../service/fireStore/getUserData";
import getPostData from "../../service/fireStore/getPostData";
import getUsersList from "../../service/fireStore/getUsersList";


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
  const [userData, setUserData] = useState([]);
  const [postData, setPostData] = useState([]);
  const [usersList,setUsersList] = useState([]);
  const [postModal, setPostModal] = useState(false);
  const [addressModal, setAddressModal] = useState(false);
  const [location, setLocation] = useState("");
  const [imgs, setImgs] = useState([]);
  const [text, setText] = useState("");
  const [noComments, setNoComments] = useState(false);

  useEffect(() => {
    getUserData(setUserData);
    getPostData(setPostData);
    getUsersList(setUsersList);
  }, []);

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
      <NavRouter userData={userData} postData={postData} usersList={usersList}/>
      <MainFooter />
    </AppContainer>
  );
};

export default RouteMain;
