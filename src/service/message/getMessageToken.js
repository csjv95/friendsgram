import { firebaseMessaging } from "../firebase";

const getMessageToken = () => {
  firebaseMessaging
    .requestPermission()
    .then(() => {
      console.log("have permistion");
      return firebaseMessaging.getToken();
    })
    .then((token) => console.log(token))
    .catch((e) => console.log(e));
  firebaseMessaging
    .getToken({ vapidKey: "<YOUR_PUBLIC_VAPID_KEY_HERE>" })
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
