import { firebaseStore } from "../firebase";

const getUserList = async () => {
  const userList = firebaseStore.collection("users");

  userList.get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
  })
  }

export default getUserList;