import React from "react";
import styled from "styled-components";
import { StProfileImg } from "../../Global/StProfileImg/StProfileImg";
import { StUnChecked, StChecked } from "../../Global/StIcon/StIcon";
import { Theme } from "../../style/Theme";
import { StInput } from "../../Global/StTags/StTags";
const StProfile = styled.li`
  margin: 1em 0;
  padding: ${({ padding }) => padding};
  display: flex;
  align-items: center;
`;

const StProfileInfo = styled.ul`
  flex-grow: 1;
  margin: 0 4em 0 2em;
  display: flex;
  flex-flow: column;
`;

const StProfileId = styled.li`
  font-size: 0.8em;
  font-weight: 600;
`;

const StProfileNicname = styled.li`
  font-size: 0.8em;
  color: ${({ theme }) => theme.colors.textColorLihgtgrey};
`;

const CheckBoxProfile = ({
  profileClick,
  listPadding,
  imgHeight,
  photoURL,
  displayName,
  name,
  uid,
  check,
}) => {
  return (
    <StProfile data-uid={uid} padding={listPadding} onClick={profileClick}>
      <StProfileImg src={photoURL} alt="my" height={imgHeight} />

      <StProfileInfo>
        <StProfileId>
          <span>{name}</span>
        </StProfileId>
        <StProfileNicname>{displayName}</StProfileNicname>
      </StProfileInfo>

      <StInput type="checkbox" id="view" display="none" />
      <label htmlFor="view">
        {check ? (
          <StChecked
            width="2em"
            borderRadius="50%"
            color={Theme.colors.contentColor}
            bgColor={Theme.colors.skyblue}
          />
        ) : (
          <StUnChecked width="2em" color={Theme.colors.borderColor} />
        )}
      </label>
    </StProfile>
  );
};

export default CheckBoxProfile;
