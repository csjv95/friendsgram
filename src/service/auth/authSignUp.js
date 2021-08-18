import { firebaseAuth, firebaseStore } from "../firebase";

const authSignUp = async (userData, follow, history) => {
  const {
    email,
    name,
    displayName,
    password,
    introduction,
    webSite,
    phoneNum,
    gen,
  } = userData;
  const { follower, following } = follow;

  try {
    //이메일 패스워드로 회원가입
    await firebaseAuth.createUserWithEmailAndPassword(email, password);

    //프로필업데이트
    const user = firebaseAuth.currentUser;
    const uid = user.uid;
    const heart = firebaseStore.collection("heart").doc(uid);
    const bookMark = firebaseStore.collection("bookMark").doc(uid);
    const timestamp = Date.now();

    await heart.set({
      uid,
      postId: [],
    });

    await bookMark.set({
      uid,
      postId: [],
    });

    await user.updateProfile({
      name,
      displayName,
      photoURL: "/imgs/defaultUserImg.png",
    });

    // DB에 넣기 follow
    await firebaseStore.collection("follow").doc(uid).set({
      follower,
      following,
      uid,
    });

    // DB에 넣기 userdata
    await firebaseStore.collection("users").doc(uid).set({
      email,
      name,
      displayName,
      password,
      photoURL: "/imgs/defaultUserImg.png",
      introduction,
      webSite,
      phoneNum,
      gen,
      timestamp,
      uid,
    });

    await firebaseStore
      .collection("search")
      .doc(uid)
      .collection("record")
      .doc(uid)
      .set({
        record: [],
      });

    // history.push({
    //   pathname: "/",
    //   state: userData,
    // });

    window.location.href = "/";
  } catch (error) {
    const errorMessage = error.message;
    alert(errorMessage);
    console.log(errorMessage);
  }
};

export default authSignUp;
