import { firebaseStore } from "../firebase";

const getMessageRoomUser = async (users, setChatRooms) => {
  const usersArr = users.map(async (user) => {
    const displayNames = user.name.map(async (name) => {
      const data = [];
      const displayName = firebaseStore
        .collection("users")
        .where("displayName", "==", name)
        .get();

      (await displayName).docs.forEach((doc) =>
        data.push([doc.data(), { roomId: user.roomId }])
      );
      return data;
    });
    const promiseAll = await Promise.all(displayNames);
    const result = promiseAll.flatMap((p) => p);

    return result;
  });

  const promiseAll = await Promise.all(usersArr);
  setChatRooms(promiseAll);
};

export default getMessageRoomUser;
