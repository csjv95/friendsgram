import { firestore } from "./firebase";

const writeUserData = (userData) => {
  const { email, name, nicname, password } = userData;
  firestore
    .collection("users")
    .add({
      email,
      name,
      nicname,
      password,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
};

export default writeUserData;
