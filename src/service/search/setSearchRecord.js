import { firebase, firebaseStore, firebaseAuth } from "../firebase";

const setSearchRecord = (searchText) => {
  const currentUserUid = firebaseAuth.currentUser.uid;

  const record = firebaseStore
    .collection("search")
    .doc(currentUserUid)
    .collection("record")
    .doc(currentUserUid);

  record.update({
    record: firebase.firestore.FieldValue.arrayUnion(searchText),
  });
};

export default setSearchRecord;
