import React from "react";
import MobileMenu from "../../componet/MobileMenu/MobileMenu";
import { useDispatch, useSelector } from "react-redux";
import { changeMobileMenuModalState } from "../../redux/modules/modals/modalState";
import {
  StUserCircle,
  StBookmarkIcon,
  StSettings,
  StTransfer,
} from "../../Global/StIcon/StIcon";

const ContainerMobileMenu = () => {
  const dispatch = useDispatch();

  const displayName = useSelector(
    (state) => state.userData.userData.data.displayName
  );

  const list = useSelector((state) => state.modalState.mobileMenuModal.list);

  const changeMobileMenu = () => dispatch(changeMobileMenuModalState());

  return <MobileMenu handleMobileMenu={changeMobileMenu} list={list} />;
};

export default ContainerMobileMenu;
