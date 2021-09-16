import { firebaseAuth, firebaseStore } from "../firebase";

const unreadCount = (dipatch, type) => {
  const currentUid = firebaseAuth.currentUser.uid;

  const unread = firebaseStore
    .collection("unread")
    .where("uid", "==", currentUid)
    .onSnapshot((user) =>
      user.forEach((item) => {
        const count = item.data().check;
        dipatch({ type, count });
        console.log("count", count);
      })
    );

  return () => {
    unread();
  };
};

export default unreadCount;
