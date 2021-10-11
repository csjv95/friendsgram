import { postDataAsync } from "../../redux/modules/post/postData";
import { firebaseStore } from "../firebase";

const getPostUsePostId = async (postId, dispatch) => {
  const post = firebaseStore
    .collection("post")
    .where("postId", "==", postId)
    .get();

  (await post).forEach((item) => {
    const postData = item.data();
    dispatch(postDataAsync(postData));
  });
};

export default getPostUsePostId;
