import { firebase, firebaseStore } from "../firebase";
import reload from "../reload/reload";

const deletePost = async (postId, handlePostMenu) => {
  const delPost = firebaseStore.collection("post").doc(postId);
  const heart = [];
  const bookmark = [];

  try {
    // bookmark, heart 배열에서 postId 지우기
    await delPost.get().then(async (field) => {
      (await field.data().heart) && heart.push(...field.data().heart); //uid
      (await field.data().bookmark) && bookmark.push(...field.data().bookmark); //uid

      heart.map(async (delId) => {
        await firebaseStore
          .collection("heart")
          .doc(delId)
          .update({
            postId: firebase.firestore.FieldValue.arrayRemove(postId),
          });
      });

      bookmark.map(async (delId) => {
        await firebaseStore
          .collection("bookMark")
          .doc(delId)
          .update({
            postId: firebase.firestore.FieldValue.arrayRemove(postId),
          });
      });
    });
    // post 지우기
    await delPost.delete();
    await handlePostMenu();
    reload(1500);
  } catch (error) {
    alert(error.message);
  }
};

export default deletePost;
