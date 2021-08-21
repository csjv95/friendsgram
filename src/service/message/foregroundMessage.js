import {
  firebase,
  firebaseAuth,
  firebaseMessaging,
  firebaseStore,
} from "../firebase";

const foregroundMessage = (path) => {
  firebaseMessaging.onMessage(async (payload) => {
    // const sendRoomId = payload.data.roomId;
    // const match = path.includes(sendRoomId);
    const match = path.includes("direct");
    const currentUid = firebaseAuth.currentUser.uid;

    match === false &&
      firebaseStore
        .collection("unread")
        .doc(currentUid)
        .update({ check: firebase.firestore.FieldValue.increment(1) });
  });
};

export default foregroundMessage;
