import React from "react";
import LoadingSpinner from "../../Global/Loading/LoadingSpinner";
import { StMainRouterSection } from "../../Global/StMainRouterSection/StMainRouterSection";
import { StPostHeader, StProfileContainer } from "../../Global/StPost/StPost";
import { StProfileImg } from "../../Global/StProfileImg/StProfileImg";

const ClickedPost = (post, photoURL) => {
  console.log(post);
  return (
    <StMainRouterSection rePaddingTop="3em">
      {console.log(post.uid)}
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
