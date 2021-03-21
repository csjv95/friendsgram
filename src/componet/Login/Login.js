import googleAuth from "../../service/google_auth";
import LoginFooter from "../LoginFooter/LoginFooter";
import { Link } from "react-router-dom";
import {
  StContainerDiv,
  StLoginInput,
  StLoginSection,
  StLoginFormUp,
  StTitle,
  StAccessBtn,
  StContainerOr,
  LineLi,
  StAuthLoginBtn,
  StGoogleSquareIcon,
  StFacebookSquareIcon,
  StPwSpan,
  StLoginFormDown,
  StSignUpSpan
} from "../../Global/StLogin/StLogin";

const Login = () => {
  const onClick = (event) => {
    event.preventDefault();
    googleAuth();
  };

  return (
    <StContainerDiv>
      <StLoginSection>
        <StLoginFormUp>
          <StTitle>Instargram</StTitle>
          <StLoginInput type="text" placeholder="아이디" />
          <StLoginInput type="pw" placeholder="비밀번호" />
          <StAccessBtn>로그인</StAccessBtn>
          <StContainerOr>
            <LineLi></LineLi>
            <li>또는</li>
            <LineLi></LineLi>
          </StContainerOr>
          <StAuthLoginBtn onClick={onClick}>
            <StGoogleSquareIcon />
            Google로 로그인
          </StAuthLoginBtn>
          <StAuthLoginBtn onClick={onClick}>
            <StFacebookSquareIcon />
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
