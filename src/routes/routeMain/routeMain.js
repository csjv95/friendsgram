import React from "react";
import Header from "../../Global/Header/Header";
import MainFooter from "../../Global/MainFooter/MainFooter";
import NavRouter from "../navRouter/navRouter";
import styled from "styled-components";
import Post from "../../componet/Post/Post";
import ModalPotal from "../../modal/ModalPotal";
const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.backgo};
`;

const RouteMain = () => {
  return (
    <AppContainer>
      <ModalPotal>
        <Post />
      </ModalPotal>
      <Header />
      <NavRouter />
      <MainFooter />
    </AppContainer>
  );
};

export default RouteMain;
