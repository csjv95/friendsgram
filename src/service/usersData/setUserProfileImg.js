import { firebaseAuth, firebaseStorage, firebaseStore } from "../firebase";

const setUserProfileImg = async (img, setProgressBar) => {
  const currentUser = firebaseAuth.currentUser;
  const currentUid = firebaseAuth.currentUser.uid;

  //storage에 사진 넣기
  const uploadTask = await firebaseStorage
    .ref()
    .child(`${currentUid}/profileImg/recently`)
    .put(img);

  //profile img update하기
  const profileImg = await firebaseStorage
    .ref()
    .child(`${currentUid}/profileImg/recently`)
    .getDownloadURL();

  const imgUrl = await Promise.resolve(profileImg);

  // update to user profile
  await currentUser.updateProfile({
    photoURL: imgUrl,
  });

  // update to store user data
  await firebaseStore
    .collection("users")
    .doc(currentUid)
    .update({ photoURL: imgUrl });
};

export default setUserProfileImg;
