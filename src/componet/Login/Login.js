import { useState } from "react";
import { Link } from "react-router-dom";
import googleAuth from "../../service/google_auth";
import LoginFooter from "../../Global/LoginFooter/LoginFooter";
import authLogin from "../../service/auth/authLogin";

import {
  StContainerDiv,
  StLoginSection,
  StLoginFormUp,
  StTitle,
  StLoginInput,
  StAccessBtn,
  StContainerOr,
  LineLi,
  StAuthLoginBtn,
  StPwSpan,
  StLoginFormDown,
  StSignUpSpan,
} from "../../Global/StLoginForm/StLoginForm";
import {
  StGoogleSquareIcon,
  StFacebookSquareIcon,
} from "../../Global/StIcon/StIcon";

const Login = ({ setLogin }) => {
  const [userLoginData, setUserLoginData] = useState({
    id: "",
    pw: "",
  });

  const inputOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserLoginData({ ...userLoginData, [name]: value });
  };

  const onClick = (event) => {
    event.preventDefault();
    googleAuth();
  };

  const onLogin = (event) => {
    event.preventDefault();
    authLogin(userLoginData, setLogin);
  };

  return (
    <StContainerDiv>
      <StLoginSection>
        <StLoginFormUp>
          <StTitle>Instargram</StTitle>
          <StLoginInput
            type="text"
            name="id"
            value={userLoginData.id}
            placeholder="아이디"
            onChange={inputOnChange}
          />
          <StLoginInput
            type="password"
            name="pw"
            value={userLoginData.pw}
            autocomplete="current-password"
            placeholder="비밀번호"
            onChange={inputOnChange}
          />
          <StAccessBtn onClick={onLogin}>로그인</StAccessBtn>
          <StContainerOr>
            <LineLi></LineLi>
            <li>또는</li>
            <LineLi></LineLi>
          </StContainerOr>
          <StAuthLoginBtn onClick={onClick}>
            <StGoogleSquareIcon width="1.1" />
            Google로 로그인
          </StAuthLoginBtn>
          <StAuthLoginBtn onClick={onClick}>
            <StFacebookSquareIcon width="1.3" />
            FaceBook로 로그인
          </StAuthLoginBtn>
          <StPwSpan>비밀번호를 잊으셨나요?</StPwSpan>
        </StLoginFormUp>
        <StLoginFormDown>
          <StSignUpSpan>
            계정이 없으신가요? <Link to="/signup">가입하기</Link>
          </StSignUpSpan>
        </StLoginFormDown>
      </StLoginSection>
      <LoginFooter />
    </StContainerDiv>
  );
};

export default Login;
