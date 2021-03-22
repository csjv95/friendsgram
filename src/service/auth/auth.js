import { firebaseAuth } from "../firebase";
import { firestore } from "../firebase";

const auth = async (userData,history) => {
  const { email, name, nicname, password } = userData;

  try {
    //이메일 패스워드로 회원가입
    await firebaseAuth.createUserWithEmailAndPassword(email, password);
    //프로필업데이트
    const user = firebaseAuth.currentUser;
    await user.updateProfile({
      name,
      nicname,
    });

    // DB에 넣기
    await firestore.collection("users").add({
      email,
      name,
      nicname,
      password,
    });
    history.push({
      pathname: "/",
      state : userData
    })

  } catch (error) {
    const errorMessage = error.message;
    alert(errorMessage);
    console.log(errorMessage);
  }
};

export default auth;
