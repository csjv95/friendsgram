import { firebaseMessaging } from "../firebase";

const getMessageToken = () => {
  firebaseMessaging
    .getToken({
      vapidKey: process.env.REACT_APP_FIREBASE_MESSAGEING_TOKEN,
    })
    .then((currentToken) => {
      if (currentToken) {
        // Send the token to your server and update the UI if necessary
        // ...
        console.log(currentToken);
      } else {
        // Show permission request UI
        console.log(
          "No registration token available. Request permission to generate one."
        );
        // ...
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
      // ...
    });
};

export default getMessageToken;
