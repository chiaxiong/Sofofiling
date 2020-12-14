import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  avatar: {
    width: "270px",
    height: "270px",
    color: "#F5AB7C",
  },
  message: {
    paddingTop: "33px",
  },
  skip: {
    margin: "0px",
    padding: "0px",
  },
}));

export default function PictureProfile({ nextStep, prevStep }) {
  const forward = e => {
    e.preventDefault();
    nextStep();
  };

  const back = e => {
    e.preventDefault();
    prevStep();
  };

  const classes = useStyles();
  return (
    <Container>
      <Typography variant="h5" className={classes.message}>
        Time for an upload! We recommend a nice headshot so everyone can see who
        you are!
      </Typography>
      <AccountCircleIcon className={classes.avatar} />
      <p className={classes.skip}>Or click Next to skip</p>
      <Button onClick={back}>Back</Button>
      <Button onClick={forward}>Next</Button>
    </Container>
  );
}
