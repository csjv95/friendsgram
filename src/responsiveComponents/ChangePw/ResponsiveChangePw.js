import React, { useState } from "react";
import StButton from "../../Global/StButton/StButton";
import {
  StChangeForm,
  StEditInput,
  StEditMain,
  StImgSection,
  StSetContainer,
} from "../../Global/StEditForm/StEditForm";
import { StProfileImg } from "../../Global/StProfileImg/StProfileImg";
import { StDiv } from "../../Global/StTags/StTags";
import authPwChange from "../../service/auth/authPwChange";
import { Theme } from "../../style/Theme";

const ResponsiveChangePw = ({ userData }) => {
  const { photoURL, displayName, password } = userData;
  const [errorText, setErrorText] = useState(false);

  const [newPw, setNewPw] = useState({
    lastPw: "",
    newPw: "",
    checkPw: "",
  });

  const pwList = [
    { title: "이전 비밀번호", index: 0, name: "lastPw" },
    { title: "새 비밀번호", index: 1, name: "newPw" },
    { title: "새 비밀번호 확인", index: 2, name: "checkPw" },
  ];

  const onChangeInput = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setNewPw({ ...newPw, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // 첫번째 input 비밀번호 check 맞는지 확인 v
    // 두번째와 세번째 input 값이 같은지 확인 v
    // 위에 결과가 다 ok이면 비밀번호 change v
    // 비밀번호 재설정 v

    newPw.lastPw === password
      ? newPw.newPw === newPw.checkPw
        ? authPwChange(newPw)
        : setErrorText("두 비밀번호가 일치하는지 확인하세요")
      : setErrorText("이전 비밀번호를 확인해주세요");
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
        <StDiv padding="0 0.5em" fontWeight="600" fontSize="1.5em">
          {displayName}
        </StDiv>
      </StImgSection>
      <StChangeForm onSubmit={onSubmit}>
        {pwList.map((item) => (
          <StSetContainer key={item.index} width="100%" padding="0.5em 0">
            <StDiv padding="0.5em 0" fontWeight="600" fontSize="0.9em">
              {item.title}
            </StDiv>

            <StEditInput
              width="100%"
              height="2.8em"
              type="password"
              name={item.name}
              onChange={onChangeInput}
              bgColor={Theme.colors.backgroundColor}
            />
          </StSetContainer>
        ))}
        <StButton
          width="10em"
          margin="1em  0"
          padding="0.5em"
          btnText="비밀번호 변경"
          bgColor={Theme.colors.skyblue}
          color={Theme.colors.textColorWhite}
          fontWeight="600"
        />
        {errorText && (
          <StDiv
            display="flex"
            justifyContent="center"
            alignItmes="center"
            fontSize="0.9em"
            fontWeight="600"
          >
            {errorText}
          </StDiv>
        )}
      </StChangeForm>
    </StEditMain>
  );
};

export default ResponsiveChangePw;
