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

const AppContainer = styled.div`
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
  progressState,
}) => {
  const upload = document.getElementById("upload");
  const address = document.getElementById("address");
  const postMenu = document.getElementById("postMenu");
  const follow = document.getElementById("follow");
  const send = document.getElementById("send");

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

      {progressState !== 0 && <ProgressBar progressState={progressState} />}

      {isLogin && <ContainerHeader />}
      <NavRouter />
      {isLogin && <MainFooter />}
    </AppContainer>
  );
};

export default RouteMain;
