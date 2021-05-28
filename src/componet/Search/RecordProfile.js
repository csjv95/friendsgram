import React, { useEffect, useState } from "react";
import { StCancel } from "../../Global/StIcon/StIcon";
import getMatchDisplayName from "../../service/usersData/getMatchDisplayName";
import { Theme } from "../../style/Theme";
import Profiles from "../Home/Profiles";

const RecordProfile = ({ user }) => {
  const [match, setMatchUserData] = useState([]);

  useEffect(() => {
    getMatchDisplayName(user, setMatchUserData);
  }, [user]);

  return (
    <>
      {match && (
        <Profiles
          listPadding="0 1em"
          imgHeight="3em"
          btnText={
            <StCancel
              width="2em"
              color={Theme.colors.contentColor}
              bgColor={Theme.colors.lightgrey}
              borderRadius="50%"
            />
          }
          photoURL={match.photoURL}
          displayName={match.displayName}
          name={match.name}
          uid={match.uid}
        />
      )}
    </>
  );
};

export default RecordProfile;
