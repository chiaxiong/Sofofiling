import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Typography,
  Button,
} from "@material-ui/core";
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

  function getSteps() {
    return ["Sign Up", "Picture Profile", "Welcome"];
  }

  const steps = getSteps();

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
    },
    button: {
      border: "10px solid ##F5AB7C",
      borderRadius: "40px",
      backgroundColor: "#fff",
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Stepper activeStep={activeStep}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper> */}
      {getStepsContent(activeStep)}
      <Button onClick={handleNext} className={classes.button}>
        {activeStep === 2 ? "Let's GO!" : "Next"}
      </Button>
    </div>
  );
}
