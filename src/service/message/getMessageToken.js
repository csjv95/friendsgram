// import axios from "axios";
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

  // when get fo
  try {
    firebaseMessaging.onMessage(async (payload) => {
      console.log("onMessage is good operating");
      console.log(await payload);
      setToken(payload);
    });
  } catch (e) {
    console.log(e.message);
  }
};

export default getMessageToken;
