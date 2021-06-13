import { firebaseStore } from "../firebase";

const getHeart = (postId, setHeartData) => {
  const heart = firebaseStore.collection("heart").doc(postId);

  heart.onSnapshot((heart) => {
    setHeartData(heart.data().uid);
  });
};

export default getHeart;
