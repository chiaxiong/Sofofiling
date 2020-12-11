import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { Router } from "@reach/router";
import { makeStyles } from "@material-ui/core/styles";
import SignUp from "../FormProcess/SignUp";
import PictureProfile from "../FormProcess/PictureProfile";
import Welcome from "../FormProcess/Welcome";

export default function MultiStepForm() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  function getStepsContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <SignUp />;
      case 1:
        return <PictureProfile />;
      case 2:
        return <Welcome />;
      default:
        return null;
    }
  }

  const useStyles = makeStyles({
    root: {
      width: "50%",
      margin: "6rem auto",
      borderRadius: "40px",
      backgroundColor: "#fff",
      position: "relative",
      bottom: "40px",
    },
    button: {
      border: "10px solid #F5AB7C",
      borderRadius: "50px",
      backgroundColor: "#fff",
      minWidth: "500px",
      minHeight: "90px",
      position: "relative",
      top: "30px",
      color: "#6DB5FB",
    },
    p: {
      fontSize: "40px",
      padding: "0",
      margin: "0 auto",
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {getStepsContent(activeStep)}
      <button onClick={handleNext} className={classes.button}>
        {activeStep === 2 ? (
          <p className={classes.p}>Let's GO!</p>
        ) : (
          <p className={classes.p}>Next</p>
        )}
      </button>
    </div>
  );
}
