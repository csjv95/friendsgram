import { firebaseMessaging } from "../firebase";

const foregroundMessage = (setForegroundMessageCount, path) => {
  // 메시지가 읽었는지 기억이 되지않는다
  firebaseMessaging.onMessage((payload) => {
    const sendRoomId = payload.data.roomId;
    const match = path.includes(sendRoomId);

    match === false &&
      setForegroundMessageCount((prevNumber) => prevNumber + 1);
  });
};

export default foregroundMessage;
