import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import setSearchRecord from "../../service/search/setSearchRecord";
import getMatchDisplayName from "../../service/usersData/getMatchDisplayName";
import Profiles from "../Home/Profiles";
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
    console.log("users", checkUser);
    
    checkUser.includes(match.displayName)
      ? setCheckUser(checkUser.filter((user) => user !== match.displayName))
      : setCheckUser([...checkUser, match.displayName]);
    // if (checkUser.includes(match.displayName)) {
    //   setCheckUser(checkUser.filter((user) => user !== match.displayName));
    //   setCheck(false);
    // } else {
    //   setCheckUser([...checkUser, match.displayName]);
    //   setCheck(true);
    // }
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
          btnDisplay="none"
          uid={match.uid}
          check={check}
          checkUser={checkUser}
          match={match}
        />
      ) : (
        <Link to={`/${match.displayName}`}>
          <Profiles
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
