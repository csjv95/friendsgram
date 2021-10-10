import React, { useState } from "react";
import {
  StEditMain,
  StImgSection,
  StChangeForm,
  StSetContainer,
  StEditInput,
  StChnageImgList,
  StImgLabel,
  StImgInput,
} from "../../Global/StEditForm/StEditForm";
import { StProfileImg } from "../../Global/StProfileImg/StProfileImg";
import { StDiv } from "../../Global/StTags/StTags";
import { Theme } from "../../style/Theme";
import StButton from "../../Global/StButton/StButton";
import setUserData from "../../service/usersData/setUserData";
import setUserProfileImg from "../../service/usersData/setUserProfileImg";

const ResponsiveChangeEidt = ({ userData }) => {
  const [reUserData, setReUserData] = useState({});

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

  const editList = [
    { title: "이름", index: 0, type: "text", name: "name", value: name },
    {
      title: "사용자 이름",
      index: 1,
      type: "text",
      name: "displayName",
      value: displayName,
    },
    {
      title: "웹사이트",
      index: 2,
      type: "text",
      name: "webSite",
      value: webSite,
    },
    {
      title: "소개",
      index: 3,
      type: "text",
      name: "introduction",
      value: introduction,
    },
    { title: "이메일", index: 4, type: "email", name: "email", value: email },
    {
      title: "전화번호",
      index: 5,
      type: "tel",
      name: "phoneNum",
      value: phoneNum,
    },
    { title: "성별", index: 6, type: "text", name: "gen", value: gen },
  ];

  const text =
    "사람들이 이름, 별명 또는 비즈니스 이름 등 회원님의 알려진 이름을 사용하여 회원님의 계정을 찾을 수 있도록 도와주세요";
  const text2 =
    "안녕하세요 Friendsgram 입니다 입력을 원하지 않는 개인정보는 입력을 않으셔도 됩니다";

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
    setUserProfileImg(img);
  };

  return (
    <StEditMain width="100%" padding="1.5em">
      <StImgSection
        display="flex"
        justifyContent="center"
        alignItmes="center"
        marginBottom="1em"
      >
        <StProfileImg src={photoURL} alt="my-profile-img" height="4em" />
        <StChnageImgList marginLeft="2em">
          <li>
            <StDiv fontSize="1em">{displayName}</StDiv>
          </li>
          <li>
            <StImgLabel
              htmlFor="img"
              color={Theme.colors.skyblueInnerText}
              fontWeight="600"
            >
              프로필 사진 바꾸기
            </StImgLabel>
            <StImgInput type="file" id="img" onChange={profileImgChange} />
          </li>
        </StChnageImgList>
      </StImgSection>
      <StChangeForm onSubmit={onSubmit}>
        {editList.map((item) => (
          <StSetContainer key={item.index} width="100%" padding="0.2em 0">
            <StDiv padding="0.5em 0" fontWeight="600" fontSize="0.9em">
              {item.title}
            </StDiv>

            <StEditInput
              width="100%"
              height="2.8em"
              type={item.type}
              name={item.name}
              placeholder={item.value ? item.value : item.title}
              onChange={onChangeInput}
              bgColor={Theme.colors.backgroundColor}
            />
            {item.index === 0 && (
              <StDiv
                padding="0.5em 0"
                color={Theme.colors.lightgrey}
                fontSize="0.8em"
                lineHeight="17px"
              >
                {text}
              </StDiv>
            )}
            {item.index === 3 && (
              <StDiv
                padding="0.5em 0"
                color={Theme.colors.lightgrey}
                fontSize="0.8em"
                lineHeight="17px"
              >
                {text2}
              </StDiv>
            )}
          </StSetContainer>
        ))}
        <StButton
          width="10em"
          margin="2em 0"
          padding="0.5em"
          btnText="제출"
          bgColor={Theme.colors.skyblue}
          color={Theme.colors.textColorWhite}
          fontWeight="600"
        />
      </StChangeForm>
    </StEditMain>
  );
};

export default ResponsiveChangeEidt;
