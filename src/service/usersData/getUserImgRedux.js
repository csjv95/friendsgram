import { getUserImgAync } from "../../redux/modules/auth/userImg";
import { firebaseStore } from "../firebase";

const getUserImgRedux = (uid, dispatch, type) => {
  firebaseStore
    .collection("users")
    .where("uid", "==", uid)
    .onSnapshot((user) =>
      user.forEach((data) => {
        const img = data.data().photoURL;
        // dispatch(type, img);
        dispatch(getUserImgAync(img));
      })
    );
};

export default getUserImgRedux;
