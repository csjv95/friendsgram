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
                <StImgLabel htmlFor="img">프로필 사진 바꾸기</StImgLabel>
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
                <label htmlFor="name">이름</label>
              </StLabelContainer>
              <StIputContainer width="75%">
                <StEditInput
                  width="80%"
                  height="2.5em"
                  type="text"
                  name="name"
                  placeholder={name ? name : "이름"}
                  onChange={onChangeInput}
                />
                <StDiv
                  padding="0.2em 0"
                  color={Theme.colors.lightgrey}
                  fontSize="0.9em"
                  lineHeight="17px"
                >
                  사람들이 이름, 별명 또는 비즈니스 이름 등 회원님의 알려진
                  이름을 사용하여 회원님의 계정을 찾을 수 있도록 도와주세요.
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
                <label htmlFor="displayName">사용자 이름</label>
              </StLabelContainer>
              <StIputContainer width="75%">
                <StEditInput
                  width="80%"
                  height="2.5em"
                  type="text"
                  name="displayName"
                  placeholder={displayName ? displayName : "사용자 이름"}
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
                <label htmlFor="webSite">웹사이트</label>
              </StLabelContainer>
              <StIputContainer width="75%">
                <StEditInput
                  width="80%"
                  height="2.5em"
                  type="text"
                  name="webSite"
                  placeholder={webSite ? webSite : "웹사이트"}
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
                <label htmlFor="introduction">소개</label>
              </StLabelContainer>
              <StIputContainer width="75%">
                <StTextArea
                  width="80%"
                  height="2.5em"
                  type="text"
                  name="introduction"
                  placeholder={introduction ? introduction : "소개"}
                  onChange={onChangeInput}
                />
                <StDiv padding="0.2em 0">개인정보</StDiv>
                <StDiv
                  padding="0.2em 0"
                  fontSize="0.9em"
                  lineHeight="17px"
                  color={Theme.colors.lightgrey}
                >
                  비즈니스나 반려동물 등에 사용된 계정인 경우에도 회원님의 개인
                  정보를 입력하세요. 공개 프로필에는 포함되지 않습니다.
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
                <label htmlFor="email">이메일</label>
              </StLabelContainer>
              <StIputContainer width="75%">
                <StEditInput
                  width="80%"
                  height="2.5em"
                  type="email"
                  name="email"
                  placeholder={email ? email : "이메일"}
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
                <label htmlFor="phoneNum">전화번호</label>
              </StLabelContainer>
              <StIputContainer width="75%">
                <StEditInput
                  width="80%"
                  height="2.5em"
                  type="tel"
                  name="phoneNum"
                  placeholder={phoneNum ? phoneNum : "전화번호"}
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
                <label htmlFor="gen">성별</label>
              </StLabelContainer>
              <StIputContainer width="75%">
                <StEditInput
                  width="80%"
                  height="2.5em"
                  type="text"
                  name="gen"
                  placeholder={gen ? gen : "성별"}
                  onChange={onChangeInput}
                />
              </StIputContainer>
            </StSetContainer>
            <StButton
              btnText="제출"
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
