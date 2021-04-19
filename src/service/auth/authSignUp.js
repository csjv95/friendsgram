import { firebaseAuth } from "../firebase";
import { firebaseStore } from "../firebase";

const authSignUp = async (userData, history) => {
  const { email, name, displayName, password } = userData;
  try {
    //이메일 패스워드로 회원가입
    await firebaseAuth.createUserWithEmailAndPassword(email, password);

    //프로필업데이트
    const user = firebaseAuth.currentUser;
    await user.updateProfile({
      name,
      displayName,
    });

    // DB에 넣기
    await firebaseStore
      .collection("users")
      .doc(user.uid)
      .collection("userData")
      .doc()
      .set({
        email,
        name,
        displayName,
        password,
        photoURL : "http://www.damodarcollege.edu.in/web/wp-content/uploads/2021/01/sample-photo1.jpg",
        follower: [],
        following : []
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
