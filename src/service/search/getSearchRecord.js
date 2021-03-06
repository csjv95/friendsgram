import { firebaseStore, firebaseAuth } from "../firebase";

const getSearchRecord = (setRecord) => {
  const currentUserUid = firebaseAuth.currentUser.uid;

  const record = firebaseStore
    .collection("search")
    .doc(currentUserUid)
    .collection("record")
    .doc(currentUserUid);

  record.onSnapshot((record) => setRecord(record.data().record));
};

export default getSearchRecord;
