import {firebaseStore,firebaseAuth} from "../firebase";

const setUserData = async (reUserData) => {
  const currentUserUid = firebaseAuth.currentUser.uid;

  const userData = firebaseStore.collection("users").doc(currentUserUid);

  await userData.update().then(
    //유저 데이터 새로받은 데이터로 업데이트
  )
}

export default setUserData;