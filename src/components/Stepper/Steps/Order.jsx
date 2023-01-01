import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { setOrderInfo } from "../../../store/slices/CocktailsSlice";
import { ButtonStyle } from "../../../styles/Header";
import {
  InputWrapperStyle,
  FormControlContainer,
  SelectStyle,
} from "../../../styles/StepperStyles";

const IngredientWrapper = styled.div`
  width: 250px;
  padding: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-item: center;
`;
const IngredientItemWrapper = styled.div`
  background-color: orange;
  color: white;
  margin: 0.5rem 0;
   padding 0.2rem;
  border: solid 1px gray;
  cursor:pointer;
`;
const Order = ({ handleBackButton, currentStep, steps, handleClick }) => {
  const { categoriesList, ingredientsList, glassesList, alcoholicTypesList } =
    useSelector((state) => state.drinks);
  const dispatch = useDispatch();

  const [category, setCategory] = useState("");
  const [glass, setGlass] = useState("");
  const [ingredient, setIngredient] = useState([]);
  const [alcoholicType, setAlcoholicType] = useState("");

  const addIngredientHandler = (e) => {
    if (!ingredient.includes(e.target.value)) {
      setIngredient((prev) => [...prev, e.target.value]);
    }
  };

  const handleDeleteIngredient = (ing) => {
    const array = ingredient.filter((item) => item !== ing);
    setIngredient(array);
  };

  useEffect(() => {
    if (categoriesList.length > 0) {
      setCategory(categoriesList[0].strCategory);
    }
    if (glassesList && glassesList.length > 0) {
      setGlass(glassesList[0].strGlass);
    }
    if (alcoholicTypesList.length > 0) {
      setAlcoholicType(alcoholicTypesList[0].strAlcoholic);
    }
  }, [categoriesList, glassesList, alcoholicTypesList]);

  const submit = (e) => {
    e.preventDefault();
    dispatch(
      setOrderInfo({
        category,
        glass,
        ingredient,
        alcoholicType,
      })
    );
    handleClick("next");
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
            {glassesList.map((item, index) => (
              <option key={index}>{item.strGlass}</option>
            ))}
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
          <SelectStyle id="ingredients" onChange={addIngredientHandler}>
            {ingredientsList.map((item, index) => (
              <option key={index}>{item.strIngredient1}</option>
            ))}
          </SelectStyle>
          <IngredientWrapper>
            {ingredient.length > 0 &&
              ingredient.map((item) => (
                <IngredientItemWrapper
                  onClick={() => handleDeleteIngredient(item)}
                  key={item}
                >
                  {item}
                </IngredientItemWrapper>
              ))}
          </IngredientWrapper>
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
