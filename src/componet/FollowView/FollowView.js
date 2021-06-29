import React, { useEffect, useState } from "react";
import { StItem, StList, StTitle } from "../../Global/StList/StList";
import { StModalContainer, StModalMain } from "../../Global/StModal/StModal";
import { Theme } from "../../style/Theme";
import Profiles from "../../componet/Home/Profiles";
import getUsersData from "../../service/usersData/getUsersData";
import setFollow from "../../service/follow/setFollow";
import StButton from "../../Global/StButton/StButton";
import { StClear } from "../../Global/StIcon/StIcon";
import Suggest from "../../componet/Suggest/Suggest";

const FollowView = ({
  followerList,
  followingList,
  usersList,
  handleFollow,
  isFollow,
}) => {
  const [userData, setUserData] = useState([]);
  console.log(isFollow)
  useEffect(() => {
    getUsersData(followingList, setUserData);
  }, [followingList]);

  const followBtnClick = async (event) => {
    const targetUser = event.target.parentNode.dataset.uid;
    await setFollow(targetUser, followingList);
  };

  return (
    <StModalContainer
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <StModalMain
        width="25em"
        height="25em"
        display="flex"
        borderRadius={Theme.borders.modalRadius}
        bgColor={Theme.colors.contentColor}
      >
        {/* following or follower */}
        <StList
          width="100%"
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <StItem
            width="100%"
            textAlign="center"
            borderBottom={`1px solid ${Theme.colors.borderColor}`}
          >
            <StTitle>{isFollow === "팔로워" ? isFollow : isFollow}</StTitle>
            <StButton
              onClick={handleFollow}
              position="absolute"
              top="1.7em"
              right="1em"
              width="3em"
              btnText={<StClear width="2em" />}
            />
          </StItem>

          <StItem width="100%" height="100%" padding="0 1em" overFlowY="auto">
            <StList
              display="flex"
              flexDirection="column"
              width="100%"
              height="100%"
            >
              {userData &&
                userData.map((user) => (
                  <Profiles
                    key={user.uid}
                    displayName={user.displayName}
                    photoURL={user.photoURL}
                    imgHeight="2em"
                    name={user.name}
                    uid={user.uid}
                    btnPadding="0.5em 1em"
                    btnBgColor={Theme.colors.contentColor}
                    btnBorder={`1px solid ${Theme.colors.borderColor}`}
                    onBtnClick={followBtnClick}
                    btnText="삭제"
                  />
                ))}
              {userData.length < 4 && (
                <Suggest
                  usersList={usersList}
                  followingList={followingList}
                  StSectionPaddingTop="0"
                  StSectionBackgroundColor={Theme.colors.contentColor}
                  StlistWidth="100%"
                  StListPadding="0"
                />
              )}
            </StList>
          </StItem>
        </StList>
      </StModalMain>
    </StModalContainer>
  );
};

export default FollowView;
