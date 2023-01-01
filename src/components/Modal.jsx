import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import {
  ModalContainerStyle,
  ModalContentStyle,
  FormContainer,
} from "../styles/ModalStyles";
import Stepper from "./Stepper/Stepper";
import Order from "./Stepper/Steps/Order";
import OrderDetails from "./Stepper/Steps/OrderDetails";
import PersonInfo from "./Stepper/Steps/PersonInfo";

import { setModalIsOpen } from "../store/slices/UiSlice";
import {
  getAlcoholicTypes,
  getCategories,
  getGlasses,
  getIngredients,
} from "../store/actions/CocktailsActions";

const Modal = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = ["Personal Info", "Order", "Order Details"];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGlasses());
    dispatch(getCategories());
    dispatch(getIngredients());
    dispatch(getAlcoholicTypes());
  }, []);

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
        return (
          <Order
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
            handleBackButton={handleBackButton}
          />
        );
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
