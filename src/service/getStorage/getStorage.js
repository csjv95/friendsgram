import { firebaseStorage } from "../firebase";
import { firebaseAuth } from "../firebase";

const getStorage = (img) => {
  const user = firebaseAuth.currentUser;
  const uid = user.uid;

  const gsUrl = firebaseStorage.ref().child(`/${uid}/${img}`);

  gsUrl.listAll().then(function(res) {
    res.prefixes.forEach(function(folderRef) {
     // console.log(folderRef);
    });
    res.items.forEach(function(itemRef) {
      // All the items under listRef.
      // console.log(itemRef);
    });
  }).catch(function(error) {
    // Uh-oh, an error occurred!
    // console.log(error);
  });
}

export default getStorage;