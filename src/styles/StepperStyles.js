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

export const InputStyle = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin-top: 0.75rem;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const InputWrapperStyle = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const ErrorTextStyle = styled.div`
  color: red;
  padding: 8px 0;
  margin-bottom: 0.5rem;
`;

export const FormControlContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SelectStyle = styled.select`
  background-color: transparent;
  margin: 1rem 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
  line-height: inherit;
`;
