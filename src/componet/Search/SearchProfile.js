import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import setSearchRecord from "../../service/search/setSearchRecord";
import getMatchDisplayName from "../../service/usersData/getMatchDisplayName";
import Profiles from "../Home/Profiles";
import CheckBoxProfile from "../Profile/CheckBoxProfile";

const SearchProfile = ({
  user,
  isCheckBox,
  checkUser,
  setCheckUser,
  check,
  changeCheck,
  setCheck,
}) => {
  const [match, setMatchUserData] = useState([]);

  useEffect(() => {
    getMatchDisplayName(user, setMatchUserData);
  }, [user]);

  const onClick = () => {
    setSearchRecord(match.displayName);
  };

  const checkBoxClick = (e) => {
    setCheck(!check);

    checkUser.includes(match.displayName)
      ? setCheckUser(checkUser.filter((user) => user !== match.displayName))
      : setCheckUser([...checkUser, match.displayName]);
  };
  // console.log("users", checkUser);
  console.log(check);
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
