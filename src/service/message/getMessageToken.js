import axios from "axios";
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

  firebaseMessaging.onMessage(async (payload) => {
    console.log(await payload);
    setToken(payload);
    await axios({
      url: "https://fcm.googleapis.com/v1/projects/477003740312/messages:send",
      method: "post",
      data: {
        content: payload,
      },
    });
  });
};

export default getMessageToken;
