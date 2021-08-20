import { firebaseAuth, firebaseStore } from "../firebase";

const unreadCount = (setForegroundMessageCount) => {
  const currentUid = firebaseAuth.currentUser.uid;
  firebaseStore
    .collection("unread")
    .where("uid", "==", currentUid)
    .onSnapshot((user) =>
      user.forEach((item) => setForegroundMessageCount(item.data().check))
    );
};

export default unreadCount;
