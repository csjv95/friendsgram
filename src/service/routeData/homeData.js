import { firebaseStore } from "../firebase";
import { firebaseAuth } from "../firebase";

const homeData = (setUserData) => {
  const user = firebaseAuth.currentUser;
  const uid = user.uid;

  const docRef = firebaseStore.collection("users").doc(uid);

  docRef
    .get()
    .then((doc) => {
      console.log(doc.exists);
      if (doc.exists) {
        console.log("Document data:", doc.data());
        setUserData(doc.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
};

export default homeData;
