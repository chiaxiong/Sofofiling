import React, { useState } from "react";
import SignUp from "./FormDetail/SignUp";
import Welcome from "./FormDetail/Welcome";
import PictureProfile from "./FormDetail/PictureProfile";
import useUser from "../../userContext/useUser";
import axios from "axios";
import { navigate } from "@reach/router";

export default function MultistepForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  // step function
  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = name => event => {
    setForm({ ...form, [name]: event.target.value });
  };

  const { fname, lname, email, password } = form;
  const values = { fname, lname, email, password };

  const { setToken } = useUser();

  const signUp = async e => {
    e.preventDefault();
    console.log("click");
    const body = {
      firstName: "HardCoded fname",
      lastName: "HardCoded lname",
      email: "HC_email@hc.com",
      password: "password",
    };

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/signup",
        body
      );

      if (data) {
        setToken(data.token);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = () => {
    axios
      .get("http://localhost:5000/api/user")
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
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
      return <Welcome onFormSubmit={signUp} getUser={getUser} />;
  }
}
