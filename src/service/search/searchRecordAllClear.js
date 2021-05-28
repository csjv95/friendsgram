import {firebaseAuth, firebaseStore } from "../firebase";

const searchRecordAllClear = () => {
  const currentUserUid = firebaseAuth.currentUser.uid;

  const record = firebaseStore
    .collection("search")
    .doc(currentUserUid)
    .collection("record")
    .doc(currentUserUid);

    record.update({
      record: []
    });
};

export default searchRecordAllClear;
