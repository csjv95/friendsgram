import { firebaseStore } from "../firebase";
import { firebaseAuth } from "../firebase";

const getUsersList = async (setUsersList) => {
  const user = firebaseAuth.currentUser;
  const uid = user.uid;

  const userList = firebaseStore.collection("users");

  let list = [];
  await userList.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // 현재 로그인한 유저 제외 모든 유저 불러오기
      if (doc.data().uid === uid) {
        //nothing
      } else {
        list.push(doc.data());
      }
    });
    setUsersList(list);
  });
};

export default getUsersList;
