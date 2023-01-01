import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setOrderCommand } from "../../../store/slices/CocktailsSlice";
import styled from "styled-components";
import { ButtonStyle } from "../../../styles/Header";

const InputStyle = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin-top: 0.75rem;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const InputWrapperStyle = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const ErrorTextStyle = styled.div`
  color: red;
  padding: 8px 0;
  margin-bottom: 0.5rem;
`;

const FormControlContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PersonInfo = ({ handleClick, currentStep, steps, handleBackButton }) => {
  const dispatch = useDispatch();
  const fNameRef = useRef();
  const lNameRef = useRef();
  const emailRef = useRef();
  const numberRef = useRef();
  const [fNameError, setFNameError] = useState(null);
  const [lNameError, setLNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [phoneError, setPhoneError] = useState(null);
  const resetError = () => {
    setFNameError(null);
    setLNameError(null);
    setEmailError(null);
    setPhoneError(null);
  };

  const submit = (e) => {
    e.preventDefault();
    resetError();
    const data = {
      fName: fNameRef.current.value,
      lName: lNameRef.current.value,
      email: emailRef.current.value,
      phone: numberRef.current.value,
    };
    if (data.fName.trim() === "") {
      setFNameError({ message: "Please enter your first name" });
      return;
    }
    if (data.lName.trim() === "") {
      setLNameError({ message: "Please enter your last name" });
      return;
    }
    if (data.email.trim() === "") {
      setEmailError({ message: "Please enter your email" });
      return;
    }
    if (data.phone.trim() === "") {
      setPhoneError({ message: "Please enter your phone number" });
      return;
    }
    dispatch(setOrderCommand(data));
    handleClick("next");
  };
  return (
    <div style={{ marginTop: "3.5rem" }}>
      <form
        onSubmit={submit}
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <InputWrapperStyle style={{}}>
          <label htmlFor="firstName">First Name</label>
          <InputStyle
            ref={fNameRef}
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Your name.."
          />
          {fNameError && <ErrorTextStyle>{fNameError.message}</ErrorTextStyle>}
          <label htmlFor="email">Email</label>
          <InputStyle
            ref={emailRef}
            type="email"
            id="email"
            name="email"
            placeholder="Your email.."
          />
          {emailError && <ErrorTextStyle>{emailError.message}</ErrorTextStyle>}
        </InputWrapperStyle>
        <InputWrapperStyle>
          <label htmlFor="lastName">Last Name</label>
          <InputStyle
            ref={lNameRef}
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Your last name.."
          />
          {lNameError && <ErrorTextStyle>{lNameError.message}</ErrorTextStyle>}
          <label htmlFor="PhoneNumber">Phone Number</label>
          <InputStyle
            ref={numberRef}
            type="text"
            id="PhoneNumber"
            name="PhoneNumber"
            placeholder="Your Phone Number.."
          />
          {phoneError && <ErrorTextStyle>{phoneError.message}</ErrorTextStyle>}
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

export default PersonInfo;
