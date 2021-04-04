import React from "react";
import Header from "../../componet/Header/Header";
import MainFooter from "../../componet/MainFooter/MainFooter";
import NavRouter from "../navRouter/navRouter";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const RouteMain = () => {
  return (
    <AppContainer>
      <Header />
      <NavRouter />
      <MainFooter />
    </AppContainer>
  );
};

export default RouteMain;
