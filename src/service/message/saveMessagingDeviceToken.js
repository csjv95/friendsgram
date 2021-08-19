import { firebaseMessaging, firebaseStore, firebaseAuth } from "../firebase";
import requestNotificationsPermissions from "./requestNotificationsPermissions";

const saveMessagingDeviceToken = () => {
  firebaseMessaging
    .getToken()
    .then(function (currentToken) {
      if (currentToken) {
        console.log("Got FCM device token:", currentToken);
        // Saving the Device Token to the datastore.
        firebaseStore
          .collection("fcmTokens")
          .doc(firebaseAuth.currentUser.uid)
          .set({
            uid: firebaseAuth.currentUser.uid,
            displayName: firebaseAuth.currentUser.displayName,
            currentToken,
          });
      } else {
        // Need to request permissions to show notifications.
        // requestNotificationsPermissions();
        requestNotificationsPermissions();
      }
    })
    .catch(function (error) {
      console.error("Unable to get messaging token.", error);
    });
};

export default saveMessagingDeviceToken;
