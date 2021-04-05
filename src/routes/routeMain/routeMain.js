import React from "react";
import Header from "../../Global/Header/Header";
import MainFooter from "../../Global/MainFooter/MainFooter";
import NavRouter from "../navRouter/navRouter";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({theme})=> theme.colors.bgc}
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
