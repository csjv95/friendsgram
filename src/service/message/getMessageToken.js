// // import axios from "axios";
// import { firebaseMessaging } from "../firebase";

// const getMessageToken = async (setToken) => {
//   const token = firebaseMessaging.getToken({
//     vapidKey: process.env.REACT_APP_FIREBASE_MESSAGEING_TOKEN,
//   });

//   if (await token) {
//     setToken(await token);
//   } else {
//     console.log(
//       "No registration token available. Request permission to generate one."
//     );
//   }
// };

// export default getMessageToken;
