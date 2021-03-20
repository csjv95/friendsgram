import React, { useState } from "react";

import {
  StContainerDiv,
  StLoginSection,
  StLoginFormUp,
  StTitle,
  StAuthLoginBtn,
  StGoogleSquareIcon,
  StFacebookSquareIcon,
  StContainerOr,
  LineLi,
  StLoginInput,
  StAccessBtn,
  StLoginFormDown,
  StSignUpSpan,
} from "../../Global/StLogin/StLogin";
import { Link } from "react-router-dom";

const SignUp = () => {

  

  return (
    <StContainerDiv>
      <StLoginSection>
        <StLoginFormUp >
          <StTitle>Instargram</StTitle>
          <StAuthLoginBtn >
            <StGoogleSquareIcon />
            Google로 로그인
          </StAuthLoginBtn>
          <StAuthLoginBtn >
            <StFacebookSquareIcon />
            FaceBook로 로그인
          </StAuthLoginBtn>
          <StContainerOr>
            <LineLi />
            <li>또는</li>
            <LineLi />
          </StContainerOr>
          <StLoginInput type="email" placeholder="이메일" />
          <StLoginInput type="text" placeholder="성명" />
          <StLoginInput type="text" placeholder="사용자 이름" />
          <StLoginInput type="pw" placeholder="비밀번호" />
          <StAccessBtn>가입</StAccessBtn>
          <div>
            가입하면 Instagram의 약관, 데이터 정책 및 쿠키 정책에 동의하게
            됩니다.
          </div>
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
