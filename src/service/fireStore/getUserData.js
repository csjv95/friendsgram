import { firebaseStore } from "../firebase";
import { firebaseAuth } from "../firebase";

const getUserData = async (setUserData) => {
  const user = firebaseAuth.currentUser;
  const uid = user.uid;

  const userData = firebaseStore
    .collection("users")
    .doc(uid)
    .collection("userData");

  await userData.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      setUserData(doc.data());
    });
    
  });
}

export default getUserData;