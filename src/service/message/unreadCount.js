import { firebaseAuth, firebaseStore } from "../firebase";

const unreadCount = (path, setForegroundMessageCount) => {
  const currentUid = firebaseAuth.currentUser.uid;

  console.log("path", path);

  const unread = firebaseStore
    .collection("unread")
    .where("uid", "==", currentUid)
    .onSnapshot((user) =>
      user.forEach((item) => setForegroundMessageCount(item.data().check))
    );

  return () => {
    unread();
  };
};

export default unreadCount;
