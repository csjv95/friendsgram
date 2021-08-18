import { firebaseAuth } from "../firebase";
import saveMessagingDeviceToken from "../message/saveMessagingDeviceToken";

const authLogin = async (userLoginData, setLogin) => {
  const { id: email, pw: password } = userLoginData;
  try {
    //이메일 페스워드로 로그인
    await firebaseAuth.signInWithEmailAndPassword(email, password);
    setLogin(true);
    saveMessagingDeviceToken();
  } catch (error) {
    const errorMessage = error.message;
    alert(errorMessage);
  }
};

export default authLogin;
