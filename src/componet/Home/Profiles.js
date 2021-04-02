import React from "react";
import styled from "styled-components";
import { StProfile } from "../../Global/StProfile/StProfile";

const Profile = styled.li`
  margin: 1em 0;
  display: flex;
  align-items: center;
`;

const ProfileInfo = styled.ul`
  flex-grow: 1;
  margin: 0 4em 0 2em;
  display: flex;
  flex-flow: column;
`;

const ProfileBtn = styled.button`
  font-weight: 600;
  color: blue;
`;

const ProfileId = styled.li`
  font-size: 0.8em;
  font-weight: 600;
`;

const ProfileNicname = styled.li`
  font-size: 0.8em;
  color: lightgray;
`;
const Profiles = ({ imgHeight, btnText }) => {
  return (
    <Profile>
      <StProfile
        src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/56593842_427595071141963_9102473363216924672_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=8GvUdv2sa94AX_J7O03&oh=9a29dc6ab80091beab9f95a0f5ab8c6c&oe=6075CB7C"
        alt="my"
        height={imgHeight}
      />
      <ProfileInfo>
        <ProfileId>id</ProfileId>
        <ProfileNicname>nickname</ProfileNicname>
      </ProfileInfo>
      <ProfileBtn>{btnText}</ProfileBtn>
    </Profile>
  );
};

export default Profiles;
