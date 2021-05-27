import { firebaseAuth, firebaseStore } from "../firebase";
import reload from "../reload/reload";

const authPwChange = async (newPw) => {
  const { checkPw } = newPw;
  const currentUser = firebaseAuth.currentUser;
  const currentUserUid = firebaseAuth.currentUser.uid;

  try {
    await currentUser
      .updatePassword(checkPw)
      .then(() => {
        firebaseStore.collection("users").doc(currentUserUid).update({
          password: checkPw,
        });
        console.log(checkPw, "비밀번호 변경 완료!");
        reload(1500);
      })
      .catch((error) => alert(error.message));
  } catch (error) {
    alert(error.message);
  }
};

export default authPwChange;
