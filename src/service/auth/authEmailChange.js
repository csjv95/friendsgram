import { firebaseAuth } from "../firebase";

const authEmailChange = (changeEmail) => {
  const currentUser = firebaseAuth.currentUser;
  
  currentUser.updateEmail(changeEmail);
}

export default authEmailChange;
