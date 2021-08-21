import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StProfileNoLink from "../../Global/StProfile/StProfileNoLink";
import setSearchRecord from "../../service/search/setSearchRecord";
import getMatchDisplayName from "../../service/usersData/getMatchDisplayName";
import CheckBoxProfile from "../Profile/CheckBoxProfile";

const SearchProfile = ({ user, isCheckBox, checkUser, setCheckUser }) => {
  const [match, setMatchUserData] = useState([]);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    getMatchDisplayName(user, setMatchUserData);
  }, [user]);

  const onClick = () => {
    setSearchRecord(match.displayName);
  };

  const checkBoxClick = () => {
    setCheck(!check);
    checkUser.includes(match.displayName)
      ? setCheckUser(checkUser.filter((user) => user !== match.displayName))
      : setCheckUser([...checkUser, match.displayName]);
  };

  return (
    <>
      {isCheckBox ? (
        <CheckBoxProfile
          profileClick={checkBoxClick}
          listPadding="0 1em"
          imgHeight="3em"
          photoURL={match.photoURL}
          displayName={match.displayName}
          name={match.name}
          uid={match.uid}
          checkUser={checkUser}
          match={match}
        />
      ) : (
        <Link to={`/${match.displayName}`}>
          <StProfileNoLink
            profileClick={onClick}
            listPadding="0 1em"
            imgHeight="3em"
            photoURL={match.photoURL}
            displayName={match.displayName}
            name={match.name}
            btnDisplay="none"
            uid={match.uid}
          />
        </Link>
      )}
    </>
  );
};

export default SearchProfile;
