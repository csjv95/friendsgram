import { firebase, firebaseAuth, firebaseStore } from "../firebase";

const selectRecordDelete = (text) => {
  const currentUserUid = firebaseAuth.currentUser.uid;

  const record = firebaseStore
    .collection("search")
    .doc(currentUserUid)
    .collection("record")
    .doc(currentUserUid);

  record.update({
    record: firebase.firestore.FieldValue.arrayRemove(text),
  });
};

export default selectRecordDelete;
