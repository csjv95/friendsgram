import {
  firebase,
  firebaseAuth,
  firebaseMessaging,
  firebaseStore,
} from "../firebase";

const foregroundMessage = (path) => {
  firebaseMessaging.onMessage((payload) => {
    const sendRoomId = payload.data.roomId;
    const match = path.includes(sendRoomId);
    const currentUid = firebaseAuth.currentUser.uid;

    match
      ? firebaseStore.collection("unread").doc(currentUid).update({ check: 0 })
      : firebaseStore
          .collection("unread")
          .doc(currentUid)
          .update({ check: firebase.firestore.FieldValue.increment(1) });
  });
};

export default foregroundMessage;
