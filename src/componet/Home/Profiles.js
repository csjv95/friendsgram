import React from "react";
import styled from "styled-components";
import { StProfileImg } from "../../Global/StProfileImg/StProfileImg";

const StProfile = styled.li`
  margin: 1em 0;
  display: flex;
  align-items: center;
`;

const StProfileInfo = styled.ul`
  flex-grow: 1;
  margin: 0 4em 0 2em;
  display: flex;
  flex-flow: column;
`;

const StProfileBtn = styled.button`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.blue};
`;

const StProfileId = styled.li`
  font-size: 0.8em;
  font-weight: 600;
`;

const StProfileNicname = styled.li`
  font-size: 0.8em;
  color: ${({ theme }) => theme.colors.textColorLihgtgrey};
`;

const Profiles = ({ imgHeight, btnText, photoURL, displayName, name,onBtnClick }) => {
  return (
    <StProfile>
      <StProfileImg src={photoURL} alt="my" height={imgHeight} />
      <StProfileInfo>
        <StProfileId>{name}</StProfileId>
        <StProfileNicname>{displayName}</StProfileNicname>
      </StProfileInfo>
      <StProfileBtn onClick={onBtnClick}>{btnText}</StProfileBtn>
    </StProfile>
  );
};

export default Profiles;
