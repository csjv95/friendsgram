import { firebaseAuth } from "../firebase";
import { firebaseStore } from "../firebase";

const authSignUp = async (userData, history) => {
  const { email, name, displayName, password } = userData;

  try {
    //이메일 패스워드로 회원가입
    await firebaseAuth.createUserWithEmailAndPassword(email, password);

    //프로필업데이트
    const user = firebaseAuth.currentUser;
    const uid = user.uid;
    await user.updateProfile({
      name,
      displayName,
    });

    // DB에 넣기
    await firebaseStore
      .collection("users")
      .doc(uid)
      .collection("userData")
      .doc()
      .set({
        email,
        name,
        displayName,
        password,
        photoURL: "/imgs/defaultUserImg",
        follower: [],
        following: [],
        token : uid
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
