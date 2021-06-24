import React from "react";
import { StModalContainer, StModalMain } from "../../Global/StModal/StModal";
import { Theme } from "../../style/Theme";

const FollowView = ({ followerList, followingList, handleFollow }) => {
  return (
    <StModalContainer
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <StModalMain
        width="25em"
        height="20em"
        display="flex"
        borderRadius={Theme.borders.modalRadius}
        bgColor={Theme.colors.contentColor}
      >
       {/* following or follower */}
        <ul>
          <li>{followingList}</li>
        </ul>
      </StModalMain>
    </StModalContainer>
  );
};

export default FollowView;
