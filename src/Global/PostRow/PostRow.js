import React, { useEffect, useState } from "react";
import styled from "styled-components";
import getUserData from "../../service/usersData/getUserData";
import ImageSlider from "../ImageSlider/ImageSlider";
import { StPostHeader, StProfileContainer, StProfileId, StProfileInfo, StProfileLocation } from "../StPost/StPost";
import { StProfileImg } from "../StProfileImg/StProfileImg";

const StPostArticle = styled.article`
  width: 65%;
  height: 100%;
`;

const StPostAside = styled.aside`
  width: 35%;
  background-color: ${({ theme }) => theme.colors.contentColor};
`;

const PostRow = ({ post }) => {
  const { uid } = post;
  const [userData, setUserData] = useState([]);
  const { photoURL ,displayName,location} = userData;
  useEffect(() => {
    getUserData(uid, setUserData);
  }, [uid]);

  console.log(userData);
  return (
    <>
      <StPostArticle>
        <ImageSlider imgs={post.imgsData} />
      </StPostArticle>
      <StPostAside>
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
            <StProfileImg src={photoURL} alt="profile img" height="100%" />
            <StProfileInfo margin="0 0 0 1em" display="flex" flexDirection> 
              <StProfileId>{displayName}</StProfileId>
              <StProfileLocation>{location}</StProfileLocation>
            </StProfileInfo>
          </StProfileContainer>
        </StPostHeader>
      </StPostAside>
    </>
  );
};

export default PostRow;
