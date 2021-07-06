import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { StUnChecked, StChecked } from "../../Global/StIcon/StIcon";
import setSearchRecord from "../../service/search/setSearchRecord";
import getMatchDisplayName from "../../service/usersData/getMatchDisplayName";
import { Theme } from "../../style/Theme";
import Profiles from "../Home/Profiles";

const SearchProfile = ({ user, isCheckBox, checkUser, setCheckUser }) => {
  const [match, setMatchUserData] = useState([]);
  const [check, setcheck] = useState(false);

  useEffect(() => {
    getMatchDisplayName(user, setMatchUserData);
  }, [user]);

  const onClick = () => {
    checkUser ? console.log("DM") : setSearchRecord(match.displayName);
  };

  const checkBoxClick = () => {
    setcheck(!check);
    checkUser.includes(match.displayName)
      ? setCheckUser(checkUser.filter((user) => user !== match.displayName))
      : setCheckUser([...checkUser, match.displayName]);
  };

  return (
    <>
      {isCheckBox ? (
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

      {isCheckBox && (
        <>
          <input type="checkbox" id="check" style={{ display: "none" }} />
          <label htmlFor="check" onClick={checkBoxClick}>
            {check ? (
              <StChecked
                width="2em"
                borderRadius="50%"
                color={Theme.colors.contentColor}
                bgColor={Theme.colors.skyblue}
              />
            ) : (
              <StUnChecked width="2em" color={Theme.colors.borderColor} />
            )}
          </label>
        </>
      )}
    </>
  );
};

export default SearchProfile;
