import { firebaseMessaging } from "../firebase";

const getMessageToken = async (setToken) => {
  const token = firebaseMessaging.getToken({
    vapidKey: process.env.REACT_APP_FIREBASE_MESSAGEING_TOKEN,
  });
  try {
    if (await token) {
      console.log(await token);
    } else {
      console.log(
        "No registration token available. Request permission to generate one."
      );
    }
  } catch (error) {
    console.log(error.message);
  }
  firebaseMessaging.onMessage((payload) => {
    console.log(payload);
    setToken(payload)
  });
};

export default getMessageToken;
