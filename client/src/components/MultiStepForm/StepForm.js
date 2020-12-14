import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SignUp from "../FormProcess/SignUp";
import Welcome from "../FormProcess/Welcome";
import PictureProfile from "../FormProcess/PictureProfile";

export default function StepForm() {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = input => event => {
    setFirstName({ [input]: event.target.value });
    setLastName({ [input]: event.target.value });
    setEmail({ [input]: event.target.value });
    setPassword({ [input]: event.target.value });
  };

  const values = { firstName, lastName, email, password };

  switch (step) {
    case 1:
      return (
        <SignUp
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 2:
      return (
        <PictureProfile
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 3:
      return <Welcome />;
  }

  return <div></div>;
}
