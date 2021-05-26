import { firebase, firebaseStore, firebaseAuth } from "../firebase";

const setSearchRecord = (searchText) => {
  const currentUserUid = firebaseAuth.currentUser.uid;
  const search = firebaseStore
    .collection("search")
    .doc(currentUserUid)
    .collection("record")
    .doc(currentUserUid);

  search.update({
    record: firebase.firestore.FieldValue.arrayUnion(searchText),
  });
};

export default setSearchRecord;
