import React from "react";
import Typography from "@material-ui/core/Typography";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  wrapper: {
    backgroundColor: "#F5AB7C",
    position: "absolute",
    top: "0",
    bottom: "0",
    right: "0",
    left: "0",
  },
  avatar: {
    padding: "0",
    margin: "0 auto",
    width: "270px",
    height: "270px",
    color: "#F5AB7C",
  },
  message: {
    padding: "33px",
    margin: theme.spacing(0, 25, 0, 25),
    color: "#827F7F",
  },
  skip: {
    margin: "0px",
    paddingBottom: "50px",
  },
  button: {
    position: "relative",
    bottom: "100px",
    border: "10px solid #F5AB7C",
    borderRadius: "50px",
    backgroundColor: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
    },
    fontSize: "25px",
    color: "#6DB5FD",
    margin: theme.spacing(0, 1, 0, 1),
    width: "200px",
  },
  form: {
    backgroundColor: "#fff",
    margin: theme.spacing(15, 50, 8, 50),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50px",
    minWidth: "500px",
    minHeight: "600px",
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
    <div className={classes.wrapper}>
      <form className={classes.form}>
        <Typography variant="h5" className={classes.message}>
          Time for an upload! <br />
          We recommend a nice headshot so everyone can see who you are!
        </Typography>
        <AccountCircleIcon className={classes.avatar} />
        <p className={classes.skip}>Or click Next to skip</p>
      </form>
      <Button onClick={back} className={classes.button}>
        Back
      </Button>
      <Button onClick={forward} className={classes.button}>
        Next
      </Button>
    </div>
  );
}
