import React, { useState, useEffect } from "react";
import getMatchDisplayName from "../../service/usersData/getMatchDisplayName";
import Profiles from "../Home/Profiles";

const SearchProfile = ({ user }) => {
  const [match, setMatchUserData] = useState([]);

  useEffect(() => {
    getMatchDisplayName(user, setMatchUserData);
  }, [user]);

  const onBtnClick = (event) => {
    const value = event.target.name;
    console.log(value);
  };
  return (
    <Profiles
      listPadding="0 1em"
      imgHeight="3em"
      btnText="팔로우"
      photoURL={match.photoURL}
      displayName={match.displayName}
      name={match.name}
      onBtnClick={onBtnClick}
      btnDisplay="none"
      uid={match.uid}
    />
  );
};

export default SearchProfile;
