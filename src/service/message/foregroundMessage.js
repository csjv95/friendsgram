import { firebaseMessaging } from "../firebase";

const foregroundMessage = (setForegroundMessageCount) => {
  firebaseMessaging.onMessage((payload) => {
    console.log("Message received. ", payload);
    setForegroundMessageCount((prevNumber) => prevNumber + 1);
  });
};

export default foregroundMessage;
