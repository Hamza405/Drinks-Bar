import React from "react";
import { useSelector } from "react-redux";
import { FormControlContainer } from "../../../styles/StepperStyles";
import { ButtonStyle } from "../../../styles/Header";
import styled from "styled-components";

export const DetailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: 3rem 0.5rem;
`;

const OrderDetails = ({
  handleBackButton,
  currentStep,
  steps,
  handleClick,
}) => {
  const { orderCommand } = useSelector((state) => state.drinks);
  return (
    <div>
      <DetailsContainer>
        <h4 style={{ margin: "0.25rem" }}>
          First Name :
          <span style={{ fontWeight: "lighter" }}>
            {orderCommand.personalInfo.fName}{" "}
          </span>
        </h4>
        <h4 style={{ margin: "1rem 0.25rem" }}>
          Last Name :
          <span style={{ fontWeight: "lighter" }}>
            {orderCommand.personalInfo.lName}{" "}
          </span>
        </h4>
        <h4 style={{ margin: "0.25rem" }}>
          Email :
          <span style={{ fontWeight: "lighter" }}>
            {orderCommand.personalInfo.email}{" "}
          </span>
        </h4>
        <h4 style={{ margin: "0.25rem" }}>
          Phone Number :
          <span style={{ fontWeight: "lighter" }}>
            {orderCommand.personalInfo.phone}{" "}
          </span>
        </h4>
        <h4 style={{ margin: "0.25rem" }}>
          Category Name :
          <span style={{ fontWeight: "lighter" }}>
            {orderCommand.orderInfo.category}{" "}
          </span>
        </h4>
        <h4 style={{ margin: "0.25rem" }}>
          Ingredient :{" "}
          {orderCommand.orderInfo.ingredient.map((item) => (
            <span style={{ fontWeight: "lighter" }}>{item} ,</span>
          ))}
        </h4>
        <h4 style={{ margin: "0.25rem" }}>
          Glass :
          <span style={{ fontWeight: "lighter" }}>
            {orderCommand.orderInfo.glass}
          </span>
        </h4>
        <h4 style={{ margin: "0.25rem" }}>
          AlcoholicType:
          <span style={{ fontWeight: "lighter" }}>
            {orderCommand.orderInfo.alcoholicType}
          </span>
        </h4>
      </DetailsContainer>
      <FormControlContainer>
        <ButtonStyle onClick={() => handleBackButton()}>Back</ButtonStyle>
        <ButtonStyle type="submit">
          {currentStep === steps.length ? "Confirm" : "Next"}
        </ButtonStyle>
      </FormControlContainer>
    </div>
  );
};

export default OrderDetails;
