import React, { useEffect, useState } from "react";
import { StCancel } from "../../Global/StIcon/StIcon";
import selectRecordDelete from "../../service/search/selecteRecordDelete";
import getMatchDisplayName from "../../service/usersData/getMatchDisplayName";
import { Theme } from "../../style/Theme";
import Profiles from "../Home/Profiles";

const RecordProfile = ({ user }) => {
  const [match, setMatchUserData] = useState([]);

  useEffect(() => {
    getMatchDisplayName(user, setMatchUserData);
  }, [user]);

  const onDelete = () => {
    const text = match.displayName;
    console.log(text)
    selectRecordDelete(text);
  };

  return (
    <>
      {match && (
        <Profiles
          listPadding="0 1em"
          imgHeight="3em"
          photoURL={match.photoURL}
          displayName={match.displayName}
          name={match.name}
          uid={match.uid}
          btnText={
            <StCancel
              width="2em"
              color={Theme.colors.contentColor}
              bgColor={Theme.colors.lightgrey}
              borderRadius="50%"
            />
          }
          onBtnClick={onDelete}
        />
      )}
    </>
  );
};

export default RecordProfile;
