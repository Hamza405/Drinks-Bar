import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import Stepper from "./Stepper/Stepper";
import Order from "./Stepper/Steps/Order";
import OrderDetails from "./Stepper/Steps/OrderDetails";
import PersonInfo from "./Stepper/Steps/PersonInfo";
import { ButtonStyle } from "../styles/Header";
import { setModalIsOpen } from "../store/slices/UiSlice";
const ModalContainerStyle = styled.div`
  position: fixed;
  z-index: 1;
  padding-top: 0.75rem;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContentStyle = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
`;

const FormContainer = styled.div`
  margin: 0.5rem 0;
  padding: 10px;
`;

const Modal = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = ["Personal Info", "Order", "Order Details"];
  const dispatch = useDispatch();

  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };
  const handleBackButton = () => {
    if (currentStep <= 1) {
      dispatch(setModalIsOpen(false));
    } else {
      handleClick();
    }
  };

  const displaySteps = (step) => {
    switch (step) {
      case 1:
        return (
          <PersonInfo
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
            handleBackButton={handleBackButton}
          />
        );
      case 2:
        return <Order />;
      case 3:
        return <OrderDetails />;
    }
  };
  return (
    <ModalContainerStyle>
      <ModalContentStyle>
        <Stepper steps={steps} currentStep={currentStep} />
        <FormContainer>{displaySteps(currentStep)}</FormContainer>
      </ModalContentStyle>
    </ModalContainerStyle>
  );
};

export default Modal;
