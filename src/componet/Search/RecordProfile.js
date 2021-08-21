import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { StClear } from "../../Global/StIcon/StIcon";
import selectRecordDelete from "../../service/search/selecteRecordDelete";
import getMatchDisplayName from "../../service/usersData/getMatchDisplayName";
import { Theme } from "../../style/Theme";
import StProfileNoLink from "../../Global/StProfile/StProfileNoLink";

const StRecordSection = styled.section`
  padding: 0 1em;
  display: flex;
`;

const StProfileLink = styled(Link)`
  flex-grow: 1;
`;

const RecordProfile = ({ user }) => {
  const [match, setMatchUserData] = useState([]);

  useEffect(() => {
    getMatchDisplayName(user, setMatchUserData);
  }, [user]);

  const onDelete = () => {
    const text = match.displayName;
    console.log(text);
    selectRecordDelete(text);
  };

  return (
    <>
      {match && (
        <StRecordSection>
          <StProfileLink to={`/${match.displayName}`}>
            <StProfileNoLink
              listWidth="80%"
              imgHeight="3em"
              photoURL={match.photoURL}
              displayName={match.displayName}
              name={match.name}
              uid={match.uid}
              btnDisplay="none"
            />
          </StProfileLink>

          <button onClick={onDelete}>
            <StClear width="1.7em" color={Theme.colors.lightgrey} />
          </button>
        </StRecordSection>
      )}
    </>
  );
};

export default RecordProfile;
