import styled from "styled-components";
import googleAuth from "../../service/google_auth";
import Footer from "../Footer/Footer";
import { FacebookSquare } from "@styled-icons/boxicons-logos/FacebookSquare";
import { Google2 } from "@styled-icons/icomoon/Google2";

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
          <StLoginInput type="text" placeholder="비밀번호" />
          <StLoginBtn>로그인</StLoginBtn>
          <StContainerUl>
            <LineLi></LineLi>
            <li>또는</li>
            <LineLi></LineLi>
          </StContainerUl>
          <StGoogleLoginBtn onClick={onClick}>
            <StGoogleSquareIcon />
            Google로 로그인
          </StGoogleLoginBtn>
          <StGoogleLoginBtn onClick={onClick}>
            <StFacebookSquareIcon />
            FaceBook로 로그인
          </StGoogleLoginBtn>
          <StPwSpan>비밀번호를 잊으셨나요?</StPwSpan>
        </StLoginFormUp>
        <StLoginFormDown>
          <StSignUpSpan>계정이 없으신가요? <a href="#">가입하기</a></StSignUpSpan>
        </StLoginFormDown>
      </StLoginSection>
      <Footer />
    </StContainerDiv>
  );
};

const StContainerDiv = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const StLoginSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  flex-grow: 1;
`;

const StLoginFormUp = styled.form`
  max-width: 15em;
  padding: 3em 3em 1em 3em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: 1px solid #d3d3d3;
  background-color: #ffffff;
`;

const StLoginFormDown = styled.form`
  max-width: 15em;
  margin-top: 1em;
  padding: 1em 5em;
  border: 1px solid #d3d3d3;
  background-color: #ffffff;
`;

const StTitle = styled.h1`
  font-family: "Cookie", cursive;
  font-size: 3em;
`;

const StLoginInput = styled.input`
  width: 100%;
  margin: 0.5em 0;
  padding: 0.5em;
  border: 1px solid #d3d3d3;
  background-color: #f5f5f5;
`;

const StLoginBtn = styled.button`
  width: 100%;
  padding: 0.5em;
  margin-bottom: 0.5em;
  border-radius: 0.3em;
  color: #ffffff;
  background-color: skyblue;
`;

const StContainerUl = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
`;

const LineLi = styled.li`
  margin: 0 0.5em;
  border-top: 1px solid #d3d3d3;
  flex-grow: 1;
`;

const StFacebookSquareIcon = styled(FacebookSquare)`
  width : 1.3em;
  margin-right: 0.5em;
  color: #0000ff;
`;

const StGoogleSquareIcon = styled(Google2)`
  width : 1.1em;
  margin-right: 0.5em;
`;

const StGoogleLoginBtn = styled.button`
  width: 100%;
  padding: 0.2em;
  display: flex;
  justify-content : center;
  align-items : center;
  border-radius: 1em;
  font-weight: 600;
`;

const StPwSpan = styled.span`
  margin-top : 1.5em;
  font-size : 0.7em;
`

const StSignUpSpan = styled.span`
  font-size: 0.8em;
  & > a {
    text-decoration: none;
  }
`

export default Login;
