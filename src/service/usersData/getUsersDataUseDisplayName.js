import { firebaseStore } from "../firebase";

const getUserDataUseDisplayName = async (users, setData) => {
  const usersArr = users.map(async (user) => {
    const data = [];
    const displayName = firebaseStore
      .collection("users")
      .where("displayName", "==", user[0])
      .get();
    (await displayName).docs.forEach((doc) => data.push(doc.data()));
    return data;
  });

  const promiseAll = await Promise.all(usersArr);
  const result = promiseAll.flatMap((p) => p);
  setData(result);
};

export default getUserDataUseDisplayName;
