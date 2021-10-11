import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StMainRouterSection } from "../../Global/StMainRouterSection/StMainRouterSection";
import { StPostHeader, StProfileContainer } from "../../Global/StPost/StPost";
import { StProfileImg } from "../../Global/StProfileImg/StProfileImg";
import getUserData from "../../service/usersData/getUserData";

const ClickedPost = ({ postData }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getUserData(postData.uid, setUserData);
  }, [postData.uid]);

  console.log(postData.uid);

  const { photoURL } = userData;

  return (
    <StMainRouterSection rePaddingTop="3em">
      <div>
        <StPostHeader
          padding="1em"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <StProfileContainer
            height="2.5em"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            hello
            <StProfileImg src={photoURL} alt="my profile img" height="100%" />
          </StProfileContainer>
        </StPostHeader>
      </div>
    </StMainRouterSection>
  );
};

export default ClickedPost;
