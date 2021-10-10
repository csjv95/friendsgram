import React from "react";
import MainFooter from "../../Global/MainFooter/MainFooter";
import NavRouter from "../navRouter/navRouter";
import styled from "styled-components";
import ModalPotal from "../../modal/ModalPotal";
import ProgressBar from "../../componet/ProgressBar/ProgressBar";
import ContainerHeader from "../../containers/ContainerHeader";
import ContainerUpload from "../../containers/modals/ContainerUpload";
import ContainerPostMenu from "../../containers/modals/ContainerPostMenu";
import ContainerFollowView from "../../containers/modals/ContainerFollowView";
import ContainerSend from "../../containers/modals/ContainerSend";
import ContainerLocation from "../../containers/modals/ContainerLocation";
import Empty from "../../Global/Empty/Empty";
import ContainerDownHeader from "../../responsiveContainers/Header/ContainerDownHeader";
import ContainerSearch from "../../responsiveContainers/modals/ContainerSearch";
import ContainerUpHeader from "../../responsiveContainers/Header/ContainerUpHeader";
import { useLocation } from "react-router";
import ContainerMobileMenu from "../../responsiveContainers/modals/ContainerMobileMenu";

const AppContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
`;

const RouteMain = ({
  isLogin,
  uploadModal,
  locationModal,
  postModal,
  followModal,
  sendModal,
  searchModal,
  mobileMenuModal,
  progressState,
  pc,
  responsive,
}) => {
  const upload = document.getElementById("upload");
  const address = document.getElementById("address");
  const postMenu = document.getElementById("postMenu");
  const follow = document.getElementById("follow");
  const send = document.getElementById("send");
  const search = document.getElementById("search");
  const mobileMenu = document.getElementById("mobile_menu");

  const location = useLocation().pathname;

  return (
    <AppContainer>
      {uploadModal && (
        <ModalPotal potalName={upload}>
          <ContainerUpload />
        </ModalPotal>
      )}

      {locationModal && (
        <ModalPotal potalName={address}>
          <ContainerLocation />
        </ModalPotal>
      )}

      {postModal && (
        <ModalPotal potalName={postMenu}>
          <ContainerPostMenu />
        </ModalPotal>
      )}

      {followModal && (
        <ModalPotal potalName={follow}>
          <ContainerFollowView />
        </ModalPotal>
      )}

      {sendModal && (
        <ModalPotal potalName={send}>
          <ContainerSend />
        </ModalPotal>
      )}

      {searchModal && (
        <ModalPotal potalName={search}>
          <ContainerSearch />
        </ModalPotal>
      )}

      {mobileMenuModal && (
        <ModalPotal potalName={mobileMenu}>
          <ContainerMobileMenu />
        </ModalPotal>
      )}

      {progressState !== 0 && <ProgressBar progressState={progressState} />}

      {isLogin && pc ? <ContainerHeader /> : <Empty></Empty>}
      {isLogin && responsive ? <ContainerUpHeader /> : <Empty></Empty>}
      <NavRouter />
      {isLogin && location === "/" ? <MainFooter /> : <Empty></Empty>}
      {isLogin && responsive ? <ContainerDownHeader /> : <Empty></Empty>}
    </AppContainer>
  );
};

export default RouteMain;
