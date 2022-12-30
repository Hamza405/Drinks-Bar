import React, { useEffect, useRef, useState } from "react";
import {
  StepperContainerStyle,
  NumberContainerStyle,
  NumberWrapperStyle,
  DesContainerStyle,
  DisplayStepsContainer,
  LineStyle,
} from "../../styles/StepperStyles";

const Stepper = ({ steps, currentStep }) => {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    let count = 0;

    while (count < newStep.length) {
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps,
          completed: true,
          highlighted: true,
          selected: true,
        };
        count++;
      }
      // step complete
      else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps,
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      }
      // step pending
      else {
        newSteps[count] = {
          ...newSteps,
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }
    return newSteps;
  };

  useEffect(() => {
    const stepsState = steps.map((step, index) => {
      return Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      );
    });

    stepRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [currentStep, steps]);

  const displaySteps = newStep.map((step, index) => {
    return (
      <DisplayStepsContainer
        key={index}
        isFullWidth={index !== newStep.length - 1}
      >
        <NumberWrapperStyle>
          <NumberContainerStyle isSelected={step.selected}>
            {index + 1}
          </NumberContainerStyle>
          <DesContainerStyle isHighlighted={step.highlighted}>
            {step.description}
          </DesContainerStyle>
        </NumberWrapperStyle>
        <LineStyle isCompleted={step.completed}></LineStyle>
      </DisplayStepsContainer>
    );
  });

  return <StepperContainerStyle>{displaySteps}</StepperContainerStyle>;
};

export default Stepper;
