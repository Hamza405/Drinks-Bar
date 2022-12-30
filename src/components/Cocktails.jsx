import React from "react";
import { useSelector } from "react-redux";
import { CocktailsContainer } from "../styles/CocktailsStyles";
import Card from "./Card";

const Cocktails = () => {
  const drinks = useSelector((state) => state.drinks.cocktailsList);
  console.log(drinks);
  return (
    <CocktailsContainer>
      {drinks.map((item) => (
        <Card
          key={item.idDrink}
          title={item.strIngredient1}
          des={item.strInstructions}
          img={item.strDrinkThumb}
        />
      ))}
    </CocktailsContainer>
  );
};

export default Cocktails;
