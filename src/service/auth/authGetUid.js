import { firebaseAuth } from "../firebase";

export const authGetUid = (dispatch, type) => {
  const currentUserUid = firebaseAuth.currentUser.uid;
  dispatch({ type, currentUserUid });
};
