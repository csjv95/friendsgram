import React from "react";
import styled from "styled-components";
import { StProfileImg } from "../StProfileImg/StProfileImg";

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

const StProfileBtn = styled.button`
  width: ${({ width }) => width};
  padding: ${({ padding }) => padding};
  display: ${({ display }) => display};
  border: ${({ border }) => border};
  border-radius: 0.2em;
  font-weight: 600;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
`;

const StProfileId = styled.li`
  font-size: 0.8em;
  font-weight: 600;
`;

const StProfileNicname = styled.li`
  font-size: 0.8em;
  color: ${({ theme }) => theme.colors.textColorLihgtgrey};
`;

const StProfileNoLink = ({
  profileClick,
  listPadding,
  imgHeight,
  btnText,
  photoURL,
  displayName,
  name,
  btnWidth,
  btnDisplay,
  btnPadding,
  btnBgColor,
  btnColor,
  btnBorder,
  onBtnClick,
  uid,
}) => {
  return (
    <StProfile data-uid={uid} padding={listPadding} onClick={profileClick}>
      <StProfileImg src={photoURL} alt="my" height={imgHeight} />
      <StProfileInfo>
        <StProfileId>{name}</StProfileId>
        <StProfileNicname>{displayName}</StProfileNicname>
      </StProfileInfo>

      <StProfileBtn
        onClick={onBtnClick}
        width={btnWidth}
        padding={btnPadding}
        bgColor={btnBgColor}
        color={btnColor}
        display={btnDisplay}
        border={btnBorder}
      >
        {btnText}
      </StProfileBtn>
    </StProfile>
  );
};

export default StProfileNoLink;
