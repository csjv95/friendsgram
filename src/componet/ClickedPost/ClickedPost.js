import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StMainRouterSection } from "../../Global/StMainRouterSection/StMainRouterSection";
import { StPostHeader, StProfileContainer } from "../../Global/StPost/StPost";
import { StProfileImg } from "../../Global/StProfileImg/StProfileImg";
import getUserData from "../../service/usersData/getUserData";

const ClickedPost = (post) => {
  const [userData, setUserData] = useState([]);

  // useEffect(() => {
  //   getUserData(post.post.uid, setUserData);
  // }, [post.post.uid]);

  console.log(post);

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
            <StProfileImg src={photoURL} alt="my profile img" height="100%" />
          </StProfileContainer>
        </StPostHeader>
      </div>
    </StMainRouterSection>
  );
};

export default ClickedPost;
