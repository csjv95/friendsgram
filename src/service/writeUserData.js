import { firebaseDatabase } from "./firebase";

const writeUserData = (userData) => {
  const { email, name, nicname, password } = userData;
  
  firebaseDatabase.ref("users/" + name).set({
    email: email,
    name: name,
    nicname: nicname,
    password: password,
  });
};

export default writeUserData;
