import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import StButton from "../../../Global/StButton/StButton";
import {
  StEditMain,
  StImgSection,
  StChnageImgList,
  StChangeForm,
  StSetContainer,
  StLabelContainer,
  StIputContainer,
  StEditInput,
  StTextArea,
  StImgLabel,
  StImgInput,
} from "../../../Global/StEditForm/StEditForm";
import { StProfileImg } from "../../../Global/StProfileImg/StProfileImg";
import { StDiv } from "../../../Global/StTags/StTags";
import setUserData from "../../../service/usersData/setUserData";
import setUserProfileImg from "../../../service/usersData/setUserProfileImg";
import ResponsiveChangeEidt from "../../../responsiveComponents/ChangeEdit/ResponsiveChangeEidt";
import { Theme } from "../../../style/Theme";
import { useDispatch, useSelector } from "react-redux";
import { barState } from "../../../redux/modules/progressBar/progressBar";

const ChangeEdit = ({ userData }) => {
  const dispatch = useDispatch();

  const changeBarState = (bar) => dispatch(barState(bar));

  const {
    photoURL,
    displayName,
    name,
    email,
    introduction,
    webSite,
    phoneNum,
    gen,
  } = userData;
  const [reUserData, setReUserData] = useState({});

  const responsive = useMediaQuery({
    query: "(max-width:900px)",
  });

  const onChangeInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setReUserData({ ...reUserData, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setUserData(reUserData);
  };

  const profileImgChange = (event) => {
    const img = event.target.files[0];
    setUserProfileImg(img, changeBarState);
  };

  return (
    <>
      {responsive ? (
        <ResponsiveChangeEidt userData={userData} />
      ) : (
        <StEditMain
          width="75%"
          padding="1em 0"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <StImgSection marginLeft="8em" display="flex">
            <StProfileImg src={photoURL} alt="my-profile-img" height="4em" />
            <StChnageImgList marginLeft="2em">
              <li>{displayName}</li>
              <li>
                <StImgLabel htmlFor="img">????????? ?????? ?????????</StImgLabel>
                <StImgInput type="file" id="img" onChange={profileImgChange} />
              </li>
            </StChnageImgList>
          </StImgSection>

          <StChangeForm
            onSubmit={onSubmit}
            padding="2em 4em"
            flexGrow="1"
            display="flex"
            flexWrap="wrap"
          >
            <StSetContainer width="100%" display="flex">
              <StLabelContainer
                width="25%"
                marginRight="2em"
                paddingTop="0.6em"
                textAlign="right"
              >
                <label htmlFor="name">??????</label>
              </StLabelContainer>
              <StIputContainer width="75%">
                <StEditInput
                  width="80%"
                  height="2.5em"
                  type="text"
                  name="name"
                  placeholder={name ? name : "??????"}
                  onChange={onChangeInput}
                />
                <StDiv
                  padding="0.2em 0"
                  color={Theme.colors.lightgrey}
                  fontSize="0.9em"
                  lineHeight="17px"
                >
                  ???????????? ??????, ?????? ?????? ???????????? ?????? ??? ???????????? ?????????
                  ????????? ???????????? ???????????? ????????? ?????? ??? ????????? ???????????????.
                </StDiv>
              </StIputContainer>
            </StSetContainer>

            <StSetContainer width="100%" display="flex">
              <StLabelContainer
                width="25%"
                marginRight="2em"
                paddingTop="0.6em"
                textAlign="right"
              >
                <label htmlFor="displayName">????????? ??????</label>
              </StLabelContainer>
              <StIputContainer width="75%">
                <StEditInput
                  width="80%"
                  height="2.5em"
                  type="text"
                  name="displayName"
                  placeholder={displayName ? displayName : "????????? ??????"}
                  onChange={onChangeInput}
                />
              </StIputContainer>
            </StSetContainer>

            <StSetContainer width="100%" display="flex">
              <StLabelContainer
                width="25%"
                marginRight="2em"
                paddingTop="0.6em"
                textAlign="right"
              >
                <label htmlFor="webSite">????????????</label>
              </StLabelContainer>
              <StIputContainer width="75%">
                <StEditInput
                  width="80%"
                  height="2.5em"
                  type="text"
                  name="webSite"
                  placeholder={webSite ? webSite : "????????????"}
                  onChange={onChangeInput}
                />
              </StIputContainer>
            </StSetContainer>

            <StSetContainer width="100%" display="flex">
              <StLabelContainer
                width="25%"
                marginRight="2em"
                paddingTop="0.6em"
                textAlign="right"
              >
                <label htmlFor="introduction">??????</label>
              </StLabelContainer>
              <StIputContainer width="75%">
                <StTextArea
                  width="80%"
                  height="2.5em"
                  type="text"
                  name="introduction"
                  placeholder={introduction ? introduction : "??????"}
                  onChange={onChangeInput}
                />
                <StDiv padding="0.2em 0">????????????</StDiv>
                <StDiv
                  padding="0.2em 0"
                  fontSize="0.9em"
                  lineHeight="17px"
                  color={Theme.colors.lightgrey}
                >
                  ??????????????? ???????????? ?????? ????????? ????????? ???????????? ???????????? ??????
                  ????????? ???????????????. ?????? ??????????????? ???????????? ????????????.
                </StDiv>
              </StIputContainer>
            </StSetContainer>

            <StSetContainer width="100%" display="flex">
              <StLabelContainer
                width="25%"
                marginRight="2em"
                paddingTop="0.6em"
                textAlign="right"
              >
                <label htmlFor="email">?????????</label>
              </StLabelContainer>
              <StIputContainer width="75%">
                <StEditInput
                  width="80%"
                  height="2.5em"
                  type="email"
                  name="email"
                  placeholder={email ? email : "?????????"}
                  onChange={onChangeInput}
                />
              </StIputContainer>
            </StSetContainer>

            <StSetContainer width="100%" display="flex">
              <StLabelContainer
                width="25%"
                marginRight="2em"
                paddingTop="0.6em"
                textAlign="right"
              >
                <label htmlFor="phoneNum">????????????</label>
              </StLabelContainer>
              <StIputContainer width="75%">
                <StEditInput
                  width="80%"
                  height="2.5em"
                  type="tel"
                  name="phoneNum"
                  placeholder={phoneNum ? phoneNum : "????????????"}
                  onChange={onChangeInput}
                />
              </StIputContainer>
            </StSetContainer>

            <StSetContainer width="100%" display="flex">
              <StLabelContainer
                width="25%"
                marginRight="2em"
                paddingTop="0.6em"
                textAlign="right"
              >
                <label htmlFor="gen">??????</label>
              </StLabelContainer>
              <StIputContainer width="75%">
                <StEditInput
                  width="80%"
                  height="2.5em"
                  type="text"
                  name="gen"
                  placeholder={gen ? gen : "??????"}
                  onChange={onChangeInput}
                />
              </StIputContainer>
            </StSetContainer>
            <StButton
              btnText="??????"
              width="4em"
              padding="0.1em"
              bgColor={Theme.colors.skyblue}
              color={Theme.colors.textColorWhite}
              fontWeight="600"
              onClick={onSubmit}
            />
          </StChangeForm>
        </StEditMain>
      )}
    </>
  );
};

export default ChangeEdit;
