import { firebaseStore } from '../firebase'

const getMessage = (clickedRoomId, setView) => {
  const message = firebaseStore
    .collection('chatRooms')
    .doc(clickedRoomId)
    .collection('message')
    .orderBy('time', 'desc')
    .limit(5)
    .onSnapshot((messages) => {
      const texts = [].flatMap((e) => e)
      messages.docs.forEach((chat) => {
        texts.push(chat.data())
      })
      setView(texts)
    })
}
// 화면에 받아온 배열,객체를 uid를 이용하여 왼쪽 오른쪽으로 나누기

export default getMessage
