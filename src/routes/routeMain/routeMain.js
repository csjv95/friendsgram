import React, { useState } from "react";
import Header from "../../Global/Header/Header";
import MainFooter from "../../Global/MainFooter/MainFooter";
import NavRouter from "../navRouter/navRouter";
import styled from "styled-components";
import Post from "../../componet/Post/Post";
import ModalPotal from "../../modal/ModalPotal";
import Address from "../../componet/Address/Adress";

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.backgo};
`;

const RouteMain = () => {
  const post = document.getElementById("post");
  const address = document.getElementById("address");
  const [postModal, setPostModal] = useState(false);
  const [addressModal, setAddressModal] = useState(false);
  const [addressName, setAddressName] = useState("");

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
            handlePost={handlePost}
            handleAddress={handleAddress}
            addressName={addressName}
          />
        </ModalPotal>
      )}
      {addressModal && (
        <ModalPotal potalName={address}>
          <Address
            handleAddress={handleAddress}
            setAddressName={setAddressName}
          />
        </ModalPotal>
      )}
      <Header handlePost={handlePost} />
      <NavRouter />
      <MainFooter />
    </AppContainer>
  );
};

export default RouteMain;
