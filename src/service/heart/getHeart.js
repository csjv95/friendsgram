import { firebaseStore } from "../firebase";

const getHeart = (postId, setHeartData) => {
  const heart = firebaseStore
    .collection("heart")
    .doc(postId)
    .onSnapshot((heart) => {
      setHeartData(heart.data().uid);
    });
    
  return () => {
    heart();
  };
};

export default getHeart;
