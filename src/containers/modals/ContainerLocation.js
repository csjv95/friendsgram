import React from "react";
import { useDispatch } from "react-redux";
import Location from "../../componet/Location/Location";
import { changeLocation } from "../../redux/modules/location/location";
import { changeLocationModalState } from "../../redux/modules/modals/modalState";

const ContainerLocation = () => {
  const dispatch = useDispatch();

  const changeLocationModal = () => dispatch(changeLocationModalState());
  const setLocation = (location) => dispatch(changeLocation(location));

  return (
    <Location handleLocation={changeLocationModal} setLocation={setLocation} />
  );
};

export default ContainerLocation;
