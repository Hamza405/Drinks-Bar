import React from "react";
import {
  CardStyle,
  CardBody,
  CardHeader,
  CardDes,
} from "../../styles/CocktailsStyles";

const Card = ({ title, img, des }) => {
  return (
    <CardStyle>
      <CardBody>
        <CardHeader>
          <h2>{title}</h2>
        </CardHeader>
        <img src={img} alt="Hot air balloons" />
        <CardDes>
          <p>{des}</p>
        </CardDes>
      </CardBody>
    </CardStyle>
  );
};

export default Card;
