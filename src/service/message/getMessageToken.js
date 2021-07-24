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

  // when get fo
  try {
    firebaseMessaging.onMessage(async (payload) => {
      console.log(await payload);
      console.log("onMessage is good operating");
      setToken(payload);
      const ra = await axios({
        url: "https://fcm.googleapis.com/v1/projects/477003740312/messages:send",
        method: "post",
        auth: "c9uisua_Arko542k7eseX1:APA91bHI5zcJVudt5iCD4aYxOuo7lwtwtqcYXT3eHrX3HkDK7H0XejI2dc8OxiNTQK0a8Tly__oUHmYlDDncktNfzxJ-xSHCx0cM-MMJzJGzsIJZ0TPEvkMMEgGAMWIOaYcpB1U9oCDr",
        responseType: "application / json",
        
        data: {
          title: payload.title,
          content: payload.body,
        },
      });
      console.log(ra)
    });
  } catch (e) {
    console.log(e.message);
  }
};

export default getMessageToken;
