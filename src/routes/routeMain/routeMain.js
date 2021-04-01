import React from "react";
import Header from "../../componet/Header/Header";
import MainFooter from "../../componet/MainFooter/MainFooter";
import MainRouter from "./MainRouter/MainRouter";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const RouteMain = ({setLogin}) => {
  return (
    <AppContainer>
      <Header />
      <MainRouter setLogin={setLogin}/>
      <MainFooter />
    </AppContainer>
  );
};

export default RouteMain;
