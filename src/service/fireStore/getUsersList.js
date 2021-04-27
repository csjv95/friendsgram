import { firebaseStore } from "../firebase";

const getUsersList = async (setUsersList) => {
  const userList = firebaseStore.collection("users");

  let list = [];
  await userList.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      list.push(doc.data());
    });
    setUsersList(list);
  });
};

export default getUsersList;
