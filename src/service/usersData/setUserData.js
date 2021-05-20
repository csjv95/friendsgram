import {firebaseStore,firebaseAuth} from "../firebase";

const setUserData = async (reUserData) => {
  const currentUserUid = firebaseAuth.currentUser.uid;
  const userData = firebaseStore.collection("users").doc(currentUserUid);

  await userData.update(
    reUserData
  ) 
  console.log("수정 완료 했습니다")
} 

export default setUserData;