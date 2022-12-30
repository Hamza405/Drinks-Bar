import styled from "styled-components";

export const StepperContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 0.5rem 1rem;
`;

export const DisplayStepsContainer = styled.div`
  display: flex;
  width: ${(props) => (props.isFullWidth ? "100%" : "")};
  align-items: center;
`;

export const NumberWrapperStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const NumberContainerStyle = styled.div`
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

export const DesContainerStyle = styled.div`
  position: absolute;
  top: 0;
  text-align: center;
  width: 1rem;
  width: 75px;
  margin-top: 90px;
  font-size: 1.2rem;
  color: ${(props) => (props.isHighlighted ? "black" : "DimGray")};
`;

export const LineStyle = styled.div`
  flex: auto;
  transition: all 500ms ease-out;
  border: solid 1px ${(props) => (props.isCompleted ? "orange" : "DimGray")};
`;
