import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import setSearchRecord from "../../service/search/setSearchRecord";
import getMatchDisplayName from "../../service/usersData/getMatchDisplayName";
import Profiles from "../Home/Profiles";

const SearchProfile = ({ user }) => {
  const [match, setMatchUserData] = useState([]);
  
  useEffect(() => {
    getMatchDisplayName(user, setMatchUserData);
  }, [user]);

  const onClick = () => {
    setSearchRecord(match.displayName)
  };

  return (
    <Link to={`/${match.displayName}`}>
      <Profiles
        profileClick={onClick}
        listPadding="0 1em"
        imgHeight="3em"
        btnText="팔로우"
        photoURL={match.photoURL}
        displayName={match.displayName}
        name={match.name}
        btnDisplay="none"
        uid={match.uid}
      />
    </Link>
  );
};

export default SearchProfile;
