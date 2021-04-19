import { firebaseStore } from "../firebase";
import { firebaseAuth } from "../firebase";

const getPostData = async (setPostData) => {
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
    setPostData(data);
  });
};

export default getPostData;
