import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setModalIsOpen } from "../../store/slices/UiSlice";
import { ButtonStyle } from "../../styles/Header";

const FormControlContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1.5rem 0px;
`;

const FormControl = ({ handleClick, currentStep, steps }) => {
  const dispatch = useDispatch();
  const handleBackButton = () => {
    if (currentStep <= 1) {
      dispatch(setModalIsOpen(false));
    } else {
      handleClick();
    }
  };
  return (
    <FormControlContainer>
      <ButtonStyle onClick={() => handleBackButton()}>Back</ButtonStyle>
      <ButtonStyle onClick={() => handleClick("next")}>
        {currentStep === steps.length ? "Confirm" : "Next"}
      </ButtonStyle>
    </FormControlContainer>
  );
};

export default FormControl;
