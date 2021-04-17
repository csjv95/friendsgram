import { firebaseStore } from "../firebase";
import { firebaseAuth } from "../firebase";

const homeData = async (setUserData) => {
  const user = firebaseAuth.currentUser;
  const uid = user.uid;

  const postData = firebaseStore
    .collection("users")
    .doc(uid)
    .collection("post");

  let data = [];
  await postData.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    setUserData(data);
  });
};

export default homeData;
