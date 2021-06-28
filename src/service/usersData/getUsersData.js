import { firebaseStore } from "../firebase";

const getUsersData = async (users, setData) => {
  const result = [];

  users.map(
    async (user) =>
      await firebaseStore
        .collection("users")
        .where("uid", "==", user)
        .get()
        .then((data) =>
          data.forEach((item) => {
            result.push(item.data());
          })
        )
  );
  setData(result); // []
};

export default getUsersData;
