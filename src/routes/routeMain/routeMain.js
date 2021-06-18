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
import Message from "../../Global/Message/Message";
import getBookMarkPostId from "../../service/bookMark/getBookMarkPostId";
import PostMenu from "../../componet/PostMenu/PostMenu";
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
  const message = document.getElementById("message");
  const postMenu = document.getElementById("postMenu");
  // const post = document.getElementById("post");
  const [currentUserUid, setCurrentUserUid] = useState("");
  const [userData, setUserData] = useState([]);
  const [usersList, setUsersList] = useState([]);
  const [followingList, setFollowingList] = useState([]); //
  const [followerList, setFollowerList] = useState([]);
  const [bookMarkPostId, setBookMarkPostId] = useState([]);
  const [uploadModal, setUploadModal] = useState(false);
  const [locationModal, setLocationModal] = useState(false);
  const [messageModal, setMessageModal] = useState(false);
  const [postMenuModal, setPostMenuModal] = useState(false);
  // const [postModal, setPostModal] = useState(false);
  const [location, setLocation] = useState("");
  const [imgs, setImgs] = useState([]);
  const [text, setText] = useState("");
  const [noComments, setNoComments] = useState(false);
  const [progressBar, setProgressBar] = useState(0);

  useEffect(() => {
    authGetUid(setCurrentUserUid);
    getUserData(setUserData);
    getUsersList(setUsersList);
    getFollowingList(setFollowingList);
    getFollowerList(setFollowerList);
    getBookMarkPostId(setBookMarkPostId);
  }, []);

  const handleUpload = () => {
    setUploadModal(!uploadModal);
  };

  const handleLocation = () => {
    setLocationModal(!locationModal);
  };

  const handleMessage = () => {
    setMessageModal(!message);
  };

  const handlePostMenu = () => {
    setPostMenuModal(!postMenuModal);
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
      {messageModal && (
        <ModalPotal potalName={message}>
          <Message />
        </ModalPotal>
      )}
      {/* {postModal && (
        <ModalPotal potalName={post}>
          <Post handlePost={handlePost} myPostData/>
        </ModalPotal>
      )} */}

      {postMenuModal && (
        <ModalPotal potalName={postMenu}>
         <PostMenu handlePostMenu={handlePostMenu}/>
        </ModalPotal>
      )}
      
      {progressBar && <ProgressBar progressBar={progressBar} />}

      <Header
        handleUpload={handleUpload}
        userData={userData}
        usersList={usersList}
      />
      <NavRouter
        userData={userData}
        usersList={usersList}
        followingList={followingList}
        followerList={followerList}
        currentUserUid={currentUserUid}
        bookMarkPostId={bookMarkPostId}
        handlePostMenu={handlePostMenu}
        // handlePost={handlePost}
      />
      <MainFooter />
    </AppContainer>
  );
};

export default RouteMain;
