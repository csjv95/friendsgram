import { firebase, firebaseAuth, firebaseStore } from "../firebase";

const readCount = (path) => {
  const currentUid = firebaseAuth.currentUser.uid;
  path.includes("direct") &&
    firebaseStore
      .collection("unread")
      .doc(currentUid)
      .update({ check: firebase.firestore.FieldValue.arrayUnion(0) });
};
export default readCount;
