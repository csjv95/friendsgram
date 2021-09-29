import { firebaseAuth } from "../firebase";

const authLogin = async (userLoginData, history) => {
  const { id: email, pw: password } = userLoginData;

  try {
    //이메일 페스워드로 로그인
    await firebaseAuth.signInWithEmailAndPassword(email, password);
    history.push({
      pathname: "/",
    });
  } catch (error) {
    const errorMessage = error.message;
    alert(errorMessage);
  }
};

export default authLogin;
