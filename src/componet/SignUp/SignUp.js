import React, { useState } from "react";
import googleAuth from "../../service/google_auth";
import { Link, useHistory } from "react-router-dom";

import authSignUp from "../../service/auth/authSignUp";
import {
  StContainerDiv,
  StLoginSection,
  StLoginFormUp,
  StTitle,
  StAuthLoginBtn,
  StContainerOr,
  LineLi,
  StLoginInput,
  StAccessBtn,
  SyAccessDiv,
  StLoginFormDown,
  StSignUpSpan,
} from "../../Global/StLoginForm/StLoginForm";
import {
  StFacebookSquareIcon,
  StGoogleSquareIcon,
} from "../../Global/StIcon/StIcon";

const SignUp = () => {
  const history = useHistory();
  const [userData, setUserData] = useState({
    email: "",
    name: "",
    nicname: "",
    password: "",
  });

  const onClick = (event) => {
    event.preventDefault();
    googleAuth();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    authSignUp(userData, history);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <StContainerDiv>
      <StLoginSection>
        <StLoginFormUp onSubmit={handleSubmit}>
          <StTitle>Instargram</StTitle>
          <StAuthLoginBtn onClick={onClick}>
            <StGoogleSquareIcon />
            Google로 로그인
          </StAuthLoginBtn>
          <StAuthLoginBtn onClick={onClick}>
            <StFacebookSquareIcon />
            FaceBook로 로그인
          </StAuthLoginBtn>
          <StContainerOr>
            <LineLi />
            <li>또는</li>
            <LineLi />
          </StContainerOr>
          <StLoginInput
            type="email"
            placeholder="이메일"
            name="email"
            vlaue={userData.email}
            onChange={handleChange}
          />
          <StLoginInput
            type="text"
            placeholder="성명"
            name="name"
            value={userData.name}
            onChange={handleChange}
          />
          <StLoginInput
            type="text"
            autoComplete="username"
            placeholder="사용자 이름"
            name="nicname"
            value={userData.nicname}
            onChange={handleChange}
          />
          <StLoginInput
            type="password"
            autoComplete="current-password"
            placeholder="비밀번호"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
          <StAccessBtn onClick={handleSubmit}>가입</StAccessBtn>
          <SyAccessDiv>
            가입하면 Instagram의 약관, 데이터 정책 및 쿠키 정책에 동의하게
            됩니다.
          </SyAccessDiv>
        </StLoginFormUp>
        <StLoginFormDown>
          <StSignUpSpan>
            계정이 없으신가요? <Link to="/">로그인</Link>
          </StSignUpSpan>
        </StLoginFormDown>
      </StLoginSection>
    </StContainerDiv>
  );
};

export default SignUp;
