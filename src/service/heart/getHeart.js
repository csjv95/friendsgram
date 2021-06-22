import { firebaseStore,firebaseAuth } from "../firebase";

const getHeart = (setHeartData) => {
  const currentUserUid = firebaseAuth.currentUser.uid;
  const heart = firebaseStore
    .collection("heart")
    .doc(currentUserUid)
    .onSnapshot((heart) => {
      setHeartData(heart.data().postId);
    });
    
  return () => {
    heart();
  };
};

export default getHeart;
