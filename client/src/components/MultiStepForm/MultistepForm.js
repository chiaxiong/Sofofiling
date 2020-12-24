import React, { useState } from "react";
import SignUp from "./FormDetail/SignUp";
import Welcome from "./FormDetail/Welcome";
import PictureProfile from "./FormDetail/PictureProfile";
import useUser from "../../userContext/useUser";
import axios from "axios";
import { navigate } from "@reach/router";

export default function StepForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // step function forward
  const nextStep = () => {
    setStep(step + 1);
  };
  // step function forward
  const prevStep = () => {
    setStep(step - 1);
  };
  //handle form
  const handleChange = name => event => {
    console.log({ ...form, [name]: event.target.value });
    setForm({ ...form, [name]: event.target.value });
  };
  //passing state through sibling components
  const { firstName, lastName, email, password } = form;
  const values = { firstName, lastName, email, password };

  //sign up function
  const { setToken } = useUser();

  const signUp = async e => {
    e.preventDefault();
    console.log(form);
    console.log("click");

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/signup",
        form
      );

      if (data) {
        setToken(data.token);
        navigate("signin");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
      return <Welcome onFormSubmit={signUp} />;
  }
}
