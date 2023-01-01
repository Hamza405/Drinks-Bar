import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setOrderPersonalInfo } from "../../../store/slices/CocktailsSlice";
import {
  InputWrapperStyle,
  ErrorTextStyle,
  FormControlContainer,
  InputStyle,
} from "../../../styles/StepperStyles";
import { ButtonStyle } from "../../../styles/Header";

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
    dispatch(setOrderPersonalInfo(data));
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
            type="number"
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
