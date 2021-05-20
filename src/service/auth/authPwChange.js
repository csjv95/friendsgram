import { firebaseAuth, firebaseStore } from "../firebase";

const authPwChange = async (newPw) => {
  const { checkPw } = newPw;
  const currentUser = firebaseAuth.currentUser;
  const currentUserUid = firebaseAuth.currentUser.uid;
  console.log('chepw',checkPw)
  await currentUser
    .updatePassword(checkPw)
    .then(() => {
      firebaseStore.collection("users").doc(currentUserUid).update({
        password: checkPw
      })
      console.log(checkPw,"비밀번호 변경 완료!");
    })
    .catch((error) => console.log(error));
};

export default authPwChange;
