import { firebasestore } from "../firebase";
import { firebaseAuth } from "../firebase";

const homeData =  (setNicName) => {
   firebaseAuth.onAuthStateChanged((user) => {
    if (user) {
      const uid = user.uid;
      console.log("uid", uid);

      const docRef = firebasestore.collection("users").doc(uid);

      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            console.log("Document data:", doc.data());
            setNicName(doc.data());
          } 
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    } else {
      console.log("??");
    }
  });
};

export default homeData;
