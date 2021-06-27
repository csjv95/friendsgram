import { firebaseStore } from "../firebase";

const getUsersData = async (users, setData) => {
  const data = [];

  await users.map(async (user) => {
    await firebaseStore
      .collection("users")
      .where("uid", "==", user)
      .get()
      .then((field) => {
        field.forEach(async (item) => data.push(item.data()));
      });
      setData(data);
    });
};

export default getUsersData;
