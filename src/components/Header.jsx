import React from "react";
import { useDispatch } from "react-redux";
import { setModalIsOpen } from "../store/slices/UiSlice";
import { HeaderDiv, ButtonStyle, TitleStyle } from "../styles/Header";

const Header = () => {
  const dispatch = useDispatch();
  const handleOpenModal = () => dispatch(setModalIsOpen(true));
  return (
    <HeaderDiv>
      <TitleStyle>Cocktails</TitleStyle>
      <ButtonStyle onClick={handleOpenModal}>Order</ButtonStyle>
    </HeaderDiv>
  );
};

export default Header;
