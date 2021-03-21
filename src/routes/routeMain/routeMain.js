import React from "react";
import { AppContainer } from "../../Global/StApp/StApp";
import Header from "../../componet/Header/Header";
import MainFooter from "../../componet/MainFooter/MainFooter";
import MainRouter from "./MainRouter/MainRouter";


const RouteMain = () => {
  return (
    <AppContainer>
      <Header />
      <MainRouter />
      <MainFooter />
    </AppContainer>
  );
};

export default RouteMain;
