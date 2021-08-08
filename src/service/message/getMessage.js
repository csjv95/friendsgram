import { firebaseStore } from '../firebase'

const getMessage = (clickedRoomId, setView) => {
  console.log(clickedRoomId)
  const texts = [].sort((a, b) => b.time - a.time).flatMap((e) => e)

  const message = firebaseStore
    .collection('chatRooms')
    .doc(clickedRoomId)
    .collection('message')
    .onSnapshot((e) => {
      e.docs.forEach((l) => {
        texts.push(l.data())
      })
      setView(texts)
    })
}

export default getMessage
