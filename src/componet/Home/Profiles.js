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
  padding: 0.5em;
  border-radius: 0.2em;
  font-weight: 600;
  background-color : ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.contentColor};
`;

const StProfileId = styled.li`
  font-size: 0.8em;
  font-weight: 600;
`;

const StProfileNicname = styled.li`
  font-size: 0.8em;
  color: ${({ theme }) => theme.colors.textColorLihgtgrey};
`;

const Profiles = ({
  imgHeight,
  btnText,
  photoURL,
  displayName,
  name,
  onBtnClick,
  uid
}) => {
  return (
    <StProfile data-uid={uid}>
      <StProfileImg src={photoURL} alt="my" height={imgHeight} />
      <StProfileInfo>
        <StProfileId>{name}</StProfileId>
        <StProfileNicname>{displayName}</StProfileNicname>
        {/* 현재 로그인한 uid가
            collection("follow").where("following", "==", (uid or displayName)이면 
            회원님을 팔로우 합니다 작성 */}
      </StProfileInfo>
      <StProfileBtn onClick={onBtnClick}>{btnText}</StProfileBtn>
    </StProfile>
  );
};

export default Profiles;
