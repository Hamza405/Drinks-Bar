import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ButtonStyle } from "../../../styles/Header";
import {
  InputWrapperStyle,
  FormControlContainer,
  SelectStyle,
} from "../../../styles/StepperStyles";
const Order = ({ handleBackButton, currentStep, steps, handleClick }) => {
  const { categoriesList, ingredientsList, glassesList, alcoholicTypesList } =
    useSelector((state) => state.drinks);

  const [category, setCategory] = useState("");
  const [glass, setGlass] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [alcoholicType, setAlcoholicType] = useState("");

  useEffect(() => {
    if (categoriesList.length > 0) {
      setCategory(categoriesList[0].strCategory);
    }
    if (ingredientsList.length > 0) {
      setIngredient(ingredientsList[0].strIngredient1);
    }
    if (glassesList.length > 0) {
      setGlass(glassesList[0].strGlass);
    }
    if (alcoholicTypesList.length > 0) {
      setAlcoholicType(alcoholicTypesList[0].strAlcoholic);
    }
  }, [categoriesList, ingredientsList, glassesList, alcoholicTypesList]);

  const submit = (e) => {
    e.preventDefault();
    console.log(category);
  };
  return (
    <div style={{ marginTop: "3.5rem" }}>
      <form
        onSubmit={submit}
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <InputWrapperStyle style={{}}>
          <label htmlFor="category">Category</label>
          <SelectStyle
            id="category"
            onChange={(e) => setCategory(e.target.value)}
          >
            {categoriesList.map((item, index) => (
              <option key={index}>{item.strCategory}</option>
            ))}
          </SelectStyle>
          <label htmlFor="glassType">Type of glass </label>
          <SelectStyle
            id="glassType"
            onChange={(e) => setGlass(e.target.value)}
          >
            {/* {glassesList.map((item, index) => (
              <option key={index}>{item.strGlass}</option>
            ))} */}
          </SelectStyle>
        </InputWrapperStyle>
        <InputWrapperStyle>
          <label htmlFor="alcoholicType">Type of alcoholic</label>
          <SelectStyle
            id="alcoholicType"
            onChange={(e) => setAlcoholicType(e.target.value)}
          >
            {alcoholicTypesList.map((item, index) => (
              <option key={index}>{item.strAlcoholic}</option>
            ))}
          </SelectStyle>
          <label htmlFor="ingredients">Ingredients</label>
          <SelectStyle
            id="ingredients"
            onChange={(e) => setIngredient(e.target.value)}
          >
            {ingredientsList.map((item, index) => (
              <option key={index}>{item.strIngredient1}</option>
            ))}
          </SelectStyle>
        </InputWrapperStyle>

        <FormControlContainer>
          <ButtonStyle onClick={() => handleBackButton()}>Back</ButtonStyle>
          <ButtonStyle type="submit">
            {currentStep === steps.length ? "Confirm" : "Next"}
          </ButtonStyle>
        </FormControlContainer>
      </form>
    </div>
  );
};

export default Order;
