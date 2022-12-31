import React, { useState } from "react";
import styled from "styled-components";
import FormControl from "./Stepper/FormControl";
import Stepper from "./Stepper/Stepper";
import Order from "./Stepper/Steps/Order";
import OrderDetails from "./Stepper/Steps/OrderDetails";
import PersonInfo from "./Stepper/Steps/PersonInfo";

const ModalContainerStyle = styled.div`
  position: fixed;
  z-index: 1;
  padding-top: 100px;
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

const Modal = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = ["Personal Info", "Order", "OrderDetails"];
  const displaySteps = (step) => {
    switch (step) {
      case 1:
        return <PersonInfo />;
      case 2:
        return <Order />;
      case 3:
        return <OrderDetails />;
    }
  };
  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };
  return (
    <ModalContainerStyle>
      <ModalContentStyle>
        <Stepper steps={steps} currentStep={currentStep} />
        <FormControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      </ModalContentStyle>
    </ModalContainerStyle>
  );
};

export default Modal;
