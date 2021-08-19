import { firebaseMessaging } from "../firebase";
import saveMessagingDeviceToken from "./saveMessagingDeviceToken";

const requestNotificationsPermissions = () => {
  console.log("Requesting notifications permission...");
  firebaseMessaging
    .requestPermission()
    .then(function () {
      // Notification permission granted.
      saveMessagingDeviceToken();
    })
    .catch(function (error) {
      console.error("Unable to get permission to notify.", error);
    });
};

export default requestNotificationsPermissions;
