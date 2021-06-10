import { firebaseStore } from "../firebase";
import { firebaseAuth } from "../firebase";

const getCurrenttUserData = async (setUserData) => {
  const user = firebaseAuth.currentUser;
  const uid = user.uid;

  const userData = firebaseStore.collection("users").where("uid", "==", uid);

  await userData
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setUserData(doc.data());
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
};

export default getCurrenttUserData;
