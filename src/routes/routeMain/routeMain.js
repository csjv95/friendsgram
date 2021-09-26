import React, { useEffect, useState } from "react";
import MainFooter from "../../Global/MainFooter/MainFooter";
import NavRouter from "../navRouter/navRouter";
import styled from "styled-components";
import ModalPotal from "../../modal/ModalPotal";
import Location from "../../componet/Location/Location";
import getUsersList from "../../service/fireStore/getUsersList";
import getFollowingList from "../../service/follow/getFollowingList";
import getFollowerList from "../../service/follow/getFollowerList";
import { authGetUid } from "../../service/auth/authGetUid";
import ProgressBar from "../../componet/ProgressBar/ProgressBar";
// import Message from "../../Global/Message/Message";
import PostMenu from "../../componet/PostMenu/PostMenu";
import FollowView from "../../componet/FollowView/FollowView";
import Send from "../../componet/Send/Send";
import saveMessagingDeviceToken from "../../service/message/saveMessagingDeviceToken";
import ContainerHeader from "../../containers/ContainerHeader";
import ContainerUpload from "../../containers/ContainerUpload";

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
`;

const RouteMain = ({
  uploadModal,
  locationModal,
  postModal,
  followModal,
  sendModal,
  changeLocationModal,
  changePostModal,
  changeFollowModal,
  changeSendModal,
  progressState,
  userData,
}) => {
  const upload = document.getElementById("upload");
  const address = document.getElementById("address");
  // const message = document.getElementById("message");
  const postMenu = document.getElementById("postMenu");
  const follow = document.getElementById("follow");
  const send = document.getElementById("send");
  const [isFollow, setIsFollow] = useState("");
  const [currentUserUid, setCurrentUserUid] = useState("");
  // const [userData, setUserData] = useState([]);
  const [usersList, setUsersList] = useState([]);
  const [followingList, setFollowingList] = useState([]);
  const [followerList, setFollowerList] = useState([]);
  const [clickedPostId, setClickedPostId] = useState("");
  const [clickedPostUid, setClickedPostUid] = useState("");
  // const [bookMarkPostIds, setBookMarkPostIds] = useState([]);
  // const [uploadModal, setUploadModal] = useState(false);
  // const [locationModal, setLocationModal] = useState(false);
  // const [postMenuModal, setPostMenuModal] = useState(false);
  // const [followModal, setFollowModal] = useState(false);
  // const [sendModal, setSendModal] = useState(false);
  // // const [messageModal, setMessageModal] = useState(false);
  const [location, setLocation] = useState("");
  // const [imgs, setImgs] = useState([]);
  // const [text, setText] = useState("");
  // const [noComments, setNoComments] = useState(false);

  // const [progressBar, setProgressBar] = useState(0);
  const [roomId, setRoomId] = useState("");
  const [token, setToken] = useState("");
  // 메세지 카운트

  useEffect(() => {
    authGetUid(setCurrentUserUid);
    getUsersList(setUsersList);
    getFollowingList(setFollowingList);
    getFollowerList(setFollowerList);
  }, []);

  useEffect(() => {
    saveMessagingDeviceToken(setToken);
  }, [token]);

  // const handleUpload = () => {
  //   changeUploadModal();
  // };

  const handleLocation = () => {
    changeLocationModal();
  };

  // const handleMessage = () => {
  //   setMessageModal(!message);
  // };

  const handlePostMenu = () => {
    changePostModal();
  };

  const handleFollow = () => {
    changeFollowModal();
  };

  const handleSend = () => {
    changeSendModal();
  };

  return (
    <AppContainer>
      {uploadModal && (
        <ModalPotal potalName={upload}>
          <ContainerUpload location={location} setLocation={setLocation} />
        </ModalPotal>
      )}

      {locationModal && (
        <ModalPotal potalName={address}>
          <Location handleLocation={handleLocation} setLocation={setLocation} />
        </ModalPotal>
      )}

      {/* {messageModal && (
        <ModalPotal potalName={message}>
          <Message />
        </ModalPotal>
      )} */}

      {postModal && (
        <ModalPotal potalName={postMenu}>
          <PostMenu
            handlePostMenu={handlePostMenu}
            clickedPostId={clickedPostId}
            clickedPostUid={clickedPostUid}
            currentUserUid={currentUserUid}
          />
        </ModalPotal>
      )}

      {followModal && (
        <ModalPotal potalName={follow}>
          <FollowView
            followerList={followerList}
            followingList={followingList}
            usersList={usersList}
            handleFollow={handleFollow}
            isFollow={isFollow}
          />
        </ModalPotal>
      )}

      {sendModal && (
        <ModalPotal potalName={send}>
          <Send handleSend={handleSend} roomId={roomId} setRoomId={setRoomId} />
        </ModalPotal>
      )}

      {progressState && <ProgressBar progressState={progressState} />}

      <ContainerHeader />

      <NavRouter
        usersList={usersList}
        followingList={followingList}
        followerList={followerList}
        currentUserUid={currentUserUid}
        handlePostMenu={handlePostMenu}
        handleFollow={handleFollow}
        handleSend={handleSend}
        // bookMarkPostIds={bookMarkPostIds}
        setClickedPostId={setClickedPostId}
        setClickedPostUid={setClickedPostUid}
        setIsFollow={setIsFollow}
      />
      <MainFooter />
    </AppContainer>
  );
};

export default RouteMain;
