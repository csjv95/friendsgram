import React, { useEffect, useState } from "react";
import Header from "../../Global/Header/Header";
import MainFooter from "../../Global/MainFooter/MainFooter";
import NavRouter from "../navRouter/navRouter";
import styled from "styled-components";
import Upload from "../../componet/Upload/Upload";
import ModalPotal from "../../modal/ModalPotal";
import Location from "../../componet/Location/Location";
import getUserData from "../../service/fireStore/getCurrenttUserData";
import getUsersList from "../../service/fireStore/getUsersList";
import getFollowingList from "../../service/follow/getFollowingList";
import getFollowerList from "../../service/follow/getFollowerList";
import { authGetUid } from "../../service/auth/authGetUid";
import ProgressBar from "../../componet/ProgressBar/ProgressBar";
// import Message from "../../Global/Message/Message";
import PostMenu from "../../componet/PostMenu/PostMenu";
import getBookMarkPostIds from "../../service/bookMark/getBookMarkPostIds";
import FollowView from "../../componet/FollowView/FollowView";
import Send from "../../componet/Send/Send";
import saveMessagingDeviceToken from "../../service/message/saveMessagingDeviceToken";
import foregroundMessage from "../../service/message/foregroundMessage";
// import getMessageToken from "../../service/message/getMessageToken";
// import Post from "../../componet/Post/Post";

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
`;

const RouteMain = () => {
  const upload = document.getElementById("upload");
  const address = document.getElementById("address");
  // const message = document.getElementById("message");
  const postMenu = document.getElementById("postMenu");
  const follow = document.getElementById("follow");
  const send = document.getElementById("send");
  const [isFollow, setIsFollow] = useState("");
  // const post = document.getElementById("post");
  const [currentUserUid, setCurrentUserUid] = useState("");
  const [userData, setUserData] = useState([]);
  const [usersList, setUsersList] = useState([]);
  const [followingList, setFollowingList] = useState([]);
  const [followerList, setFollowerList] = useState([]);
  const [clickedPostId, setClickedPostId] = useState("");
  const [clickedPostUid, setClickedPostUid] = useState("");
  const [bookMarkPostIds, setBookMarkPostIds] = useState([]);
  const [uploadModal, setUploadModal] = useState(false);
  const [locationModal, setLocationModal] = useState(false);
  // const [messageModal, setMessageModal] = useState(false);
  const [postMenuModal, setPostMenuModal] = useState(false);
  const [followModal, setFollowModal] = useState(false);
  const [sendModal, setSendModal] = useState(false);
  // const [postModal, setPostModal] = useState(false);
  const [location, setLocation] = useState("");
  const [imgs, setImgs] = useState([]);
  const [text, setText] = useState("");
  const [noComments, setNoComments] = useState(false);
  const [progressBar, setProgressBar] = useState(0);
  const [roomId, setRoomId] = useState("");
  const [token, setToken] = useState("");
  const [foregroundMessageCount, setForegroundMessageCount] = useState(0);

  useEffect(() => {
    authGetUid(setCurrentUserUid);
    getUserData(setUserData);
    getUsersList(setUsersList);
    getFollowingList(setFollowingList);
    getFollowerList(setFollowerList);
    foregroundMessage(setForegroundMessageCount);
    const bookMark = getBookMarkPostIds(setBookMarkPostIds);

    return () => {
      bookMark();
    };
  }, []);

  useEffect(() => {
    saveMessagingDeviceToken();
  }, [token]);

  const handleUpload = () => {
    setUploadModal(!uploadModal);
  };

  const handleLocation = () => {
    setLocationModal(!locationModal);
  };

  // const handleMessage = () => {
  //   setMessageModal(!message);
  // };

  const handlePostMenu = () => {
    setPostMenuModal(!postMenuModal);
  };

  const handleFollow = () => {
    setFollowModal(!followModal);
  };

  const handleSend = () => {
    setSendModal(!sendModal);
  };

  // const handlePost = () => {
  //   setPostModal(!postModal);
  // }

  return (
    <AppContainer>
      {uploadModal && (
        <ModalPotal potalName={upload}>
          <Upload
            imgs={imgs}
            setImgs={setImgs}
            text={text}
            setText={setText}
            noComments={noComments}
            setNoComments={setNoComments}
            handleUpload={handleUpload}
            handleLocation={handleLocation}
            location={location}
            setLocation={setLocation}
            setProgressBar={setProgressBar}
          />
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

      {postMenuModal && (
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

      {/* {postModal && (
        <ModalPotal potalName={post}>
          <Post handlePost={handlePost} myPostData/>
        </ModalPotal>
      )} */}

      {progressBar && <ProgressBar progressBar={progressBar} />}

      <Header
        handleUpload={handleUpload}
        userData={userData}
        usersList={usersList}
        token={token}
        setToken={setToken}
        foregroundMessageCount={foregroundMessageCount}
      />
      <NavRouter
        userData={userData}
        usersList={usersList}
        followingList={followingList}
        followerList={followerList}
        currentUserUid={currentUserUid}
        handlePostMenu={handlePostMenu}
        handleFollow={handleFollow}
        handleSend={handleSend}
        bookMarkPostIds={bookMarkPostIds}
        setClickedPostId={setClickedPostId}
        setClickedPostUid={setClickedPostUid}
        setIsFollow={setIsFollow}
        roomId={roomId}
        setRoomId={setRoomId}
        setForegroundMessageCount={setForegroundMessageCount}
        // handlePost={handlePost}
      />
      <MainFooter />
    </AppContainer>
  );
};

export default RouteMain;
