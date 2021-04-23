import { firebaseAuth } from "../firebase";
import { firebaseStore } from "../firebase";

const authSignUp = async (userData, follow, history) => {
  const { email, name, displayName, password } = userData;
  const { follower, following } = follow;

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

    // DB에 넣기 follow
    await firebaseStore.collection("follow").doc().set({
      follower,
      following,
      uid,
    });

    // DB에 넣기 userdata
    await firebaseStore.collection("users").doc().set({
      email,
      name,
      displayName,
      password,
      photoURL: "/imgs/defaultUserImg.png",
      uid,
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
