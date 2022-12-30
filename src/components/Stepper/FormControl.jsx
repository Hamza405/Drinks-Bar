import React from "react";
import styled from "styled-components";
import { ButtonStyle } from "../../styles/Header";

const FormControlContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1.5rem 0px;
`;

const FormControl = () => {
  return (
    <FormControlContainer>
      <ButtonStyle>Back</ButtonStyle>
      <ButtonStyle>Next</ButtonStyle>
    </FormControlContainer>
  );
};

export default FormControl;
