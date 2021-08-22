import React, { useState } from "react";

import StButton from "../../Global/StButton/StButton";
import {
  StEditMain,
  StImgSection,
  StChnageImgList,
  StChangeForm,
  StSetContainer,
  StLabelContainer,
  StIputContainer,
  StEditInput,
} from "../../Global/StEditForm/StEditForm";
import { StProfileImg } from "../../Global/StProfileImg/StProfileImg";
import authPwChange from "../../service/auth/authPwChange";
import { Theme } from "../../style/Theme";

const ChangePw = ({ userData }) => {
  const { photoURL, displayName, password } = userData;

  const [newPw, setNewPw] = useState({
    lastPw: "",
    newPw: "",
    checkPw: "",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    // 첫번째 input 비밀번호 check 맞는지 확인 v
    // 두번째와 세번째 input 값이 같은지 확인 v
    // 위에 결과가 다 ok이면 비밀번호 change v
    // 비밀번호 재설정 v

    newPw.lastPw === password
      ? newPw.newPw === newPw.checkPw
        ? authPwChange(newPw)
        : console.log("두 비밀번호가 일치하는지 확인하세요")
      : console.log("비밀번호를 확인해주세요");
  };

  const onChangeInput = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setNewPw({ ...newPw, [name]: value });
  };

  return (
    <StEditMain
      width="75%"
      padding="1em 0"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <StImgSection marginLeft="8em" display="flex" alignItmes="center">
        <StProfileImg src={photoURL} alt="my-profile-img" height="3em" />
        <StChnageImgList marginLeft="2em">
          <li>{displayName}</li>
        </StChnageImgList>
      </StImgSection>

      <StChangeForm onSubmit={onSubmit} padding="2em 4em" flexGrow="1">
        <StSetContainer width="100%" height="3em" display="flex">
          <StLabelContainer
            width="25%"
            marginRight="2em"
            paddingTop="0.6em"
            textAlign="right"
          >
            <label htmlFor="lastPw">이전 비밀번호</label>
          </StLabelContainer>
          <StIputContainer width="70%">
            <StEditInput
              width="100%"
              height="2.8em"
              type="password"
              name="lastPw"
              onChange={onChangeInput}
              bgColor={Theme.colors.backgroundColor}
            />
          </StIputContainer>
        </StSetContainer>

        <StSetContainer width="100%" height="3em" display="flex">
          <StLabelContainer
            width="25%"
            marginRight="2em"
            paddingTop="0.6em"
            textAlign="right"
          >
            <label htmlFor="newPw">새 비밀번호</label>
          </StLabelContainer>
          <StIputContainer width="70%">
            <StEditInput
              width="100%"
              height="2.8em"
              type="password"
              name="newPw"
              onChange={onChangeInput}
              bgColor={Theme.colors.backgroundColor}
            />
          </StIputContainer>
        </StSetContainer>

        <StSetContainer width="100%" height="3em" display="flex">
          <StLabelContainer
            width="25%"
            marginRight="2em"
            paddingTop="0.6em"
            textAlign="right"
          >
            <label htmlFor="checkPw">새 비밀번호 확인</label>
          </StLabelContainer>
          <StIputContainer width="70%">
            <StEditInput
              width="100%"
              height="2.8em"
              type="password"
              name="checkPw"
              onChange={onChangeInput}
              bgColor={Theme.colors.backgroundColor}
            />
          </StIputContainer>
        </StSetContainer>
        <StButton width="10em" padding="0.5em" btnText="비밀번호 변경" />
      </StChangeForm>
    </StEditMain>
  );
};

export default ChangePw;
