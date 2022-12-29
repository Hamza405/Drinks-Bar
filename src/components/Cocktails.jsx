import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Card from "./Card";

const CocktailsContainer = styled.div`
  margin: 16px 32px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
`;

//idDrink
//strDrinkThumb img
// strIngredient1: "Galliano"
//strInstructions: "Pour the Galliano liqueur over ice. Fill the remainder of the glass with ginger ale and thats all there is to it. You now have a your very own GG.";
// strAlcoholic: "Alcoholic"

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
