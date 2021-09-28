import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Send from "../../componet/Send/Send";
import { changeSendModalState } from "../../redux/modules/modals/modalState";

const ContainerSend = () => {
  const dispatch = useDispatch();
  const [roomId, setRoomId] = useState("");

  const changeSendModal = () => dispatch(changeSendModalState());

  return (
    <Send handleSend={changeSendModal} roomId={roomId} setRoomId={setRoomId} />
  );
};

export default ContainerSend;
