import { firebaseAuth } from "../firebase";

const authLogin = async (userLoginData) => {
  const { id: email, pw: password } = userLoginData;
  try {
    //이메일 페스워드로 로그인
    await firebaseAuth.signInWithEmailAndPassword(email, password);
  } catch (error) {
    const errorMessage = error.message;
    alert(errorMessage);
  }
};

export default authLogin;
