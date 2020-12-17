import React, { useState } from "react";
import SignUp from "./FormDetail/SignUp";
import Welcome from "./FormDetail/Welcome";
import PictureProfile from "./FormDetail/PictureProfile";

export default function StepForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = input => event => {
    // setFirstName({ [input]: event.target.value });
    // setLastName({ [input]: event.target.value });
    // setEmail({ [input]: event.target.value });
    // setPassword({ [input]: event.target.value });
    setForm({ ...form, [event.target.form]: event.target.values });
  };

  const values = { form };

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
}
