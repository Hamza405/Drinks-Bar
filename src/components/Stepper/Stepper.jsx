import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const StepperContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 0.5rem 1rem;
`;

const DisplayStepsContainer = styled.div`
  display: flex;
  width: ${(props) => (props.isFullWidth ? "100%" : "")};
  align-items: center;
`;

const NumberWrapperStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const NumberContainerStyle = styled.div`
  border-radius: 100%;
  transition: all 500ms ease-out;
  border: solid 1px gray;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  padding: 1rem;
  background-color: ${(props) => (props.isSelected ? "orange" : "")};
  color: ${(props) => (props.isSelected ? "white" : "")};
`;

const DesContainerStyle = styled.div`
  position: absolute;
  top: 0;
  text-align: center;
  width: 1rem;
  width: 75px;
  margin-top: 90px;
  font-size: 1.2rem;
`;

const LineStyle = styled.div`
  flex: auto;
  transition: all 500ms ease-out;
  border: solid 1px;
`;
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

  console.log(newStep);
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
          <DesContainerStyle>{step.description}</DesContainerStyle>
        </NumberWrapperStyle>
        {index != 2 && <LineStyle></LineStyle>}
      </DisplayStepsContainer>
    );
  });

  return <StepperContainerStyle>{displaySteps}</StepperContainerStyle>;
};

export default Stepper;
