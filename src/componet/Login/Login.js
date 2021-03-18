import styled from "styled-components";
import googleAuth from "../../service/google_auth";

const Login = () => {
  const onClick = () => {
    googleAuth();
  };

  return (
    <LoginSection>
      <h2>Instargram</h2>
      <LoginForm>
        <IdInput type="text" placeholder="아이디"/>
        <PwInput type="text" placeholder="비밀번호"/>
        <button>로그인</button>
        <ul>
        <li>
          <GoogleLoginBtn onClick={onClick}>Google로 로그인</GoogleLoginBtn>
        </li>
      </ul>
      </LoginForm>

      
    </LoginSection>
  );
};

const LoginSection = styled.section`
  display: flex;
  flex-direction : column;
  justify-content: center;
  align-items: center;
`

const LoginForm = styled.form`
  display: flex;
  flex-direction : column;
  justify-content: center;
  align-items: center;
`
const IdInput = styled.input `

`

const PwInput = styled.input`
  
`
const GoogleLoginBtn = styled.button`
  border-radius: 1em;
  background-color: gray;
`;
export default Login;
