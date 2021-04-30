import { firebaseAuth } from "../firebase";

export const authGetUid = (setCurrentUserUid) => {
  const currentUserUid = firebaseAuth.currentUser.uid;
  setCurrentUserUid(currentUserUid);
}