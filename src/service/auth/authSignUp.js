import { firebaseAuth } from "../firebase";
import { firebasestore } from "../firebase";

const authSignUp = async (userData, history) => {
  const { email, name, nicname, password } = userData;
  try {
    //이메일 패스워드로 회원가입
    await firebaseAuth.createUserWithEmailAndPassword(email, password);

    //프로필업데이트
    const user = firebaseAuth.currentUser;
    console.log(user.uid);
    await user.updateProfile({
      name,
      nicname,
    });

    // DB에 넣기
    await firebasestore.collection("users").doc(user.uid).set({
      email,
      name,
      nicname,
      password,
    });

    history.push({
      pathname: "/",
      state: userData,
    });
  } catch (error) {
    const errorMessage = error.message;
    alert(errorMessage);
    console.log(errorMessage);
  }
};

export default authSignUp;
