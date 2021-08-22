import authEmailChange from "../auth/authEmailChange";
import { firebaseStore, firebaseAuth } from "../firebase";
import reload from "../reload/reload";

const setUserData = async (reUserData) => {
  const currentUserUid = firebaseAuth.currentUser.uid;
  const changeEmail = await reUserData.email;
  const userData = firebaseStore.collection("users").doc(currentUserUid);

  await userData.update(reUserData);
  changeEmail && authEmailChange(changeEmail);
  console.log("수정 완료 했습니다");

  reload(1500);
};

export default setUserData;
