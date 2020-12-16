import React from "react";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
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
  input: {
    marginTop: "50px",
    width: "80vh",
  },
  button: {
    position: "relative",
    top: "105px",
    border: "10px solid #F5AB7C",
    borderRadius: "50px",
    minWidth: "400px",
    minHeight: "70px",
    backgroundColor: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
    },
    fontSize: "25px",
    color: "#6DB5FD",
  },
}));

export default function SignUp({ nextStep, handleChange, values }) {
  const classes = useStyles();

  const forward = e => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className={classes.wrapper}>
      <form className={classes.form} noValidate>
        <TextField
          name="firstName"
          required
          id="firstName"
          label="First Name"
          className={classes.input}
          onChange={handleChange("setFirstName")}
          defaultValue={values.firstName}
        />

        <TextField
          required
          id="lastName"
          label="Last Name"
          name="lastName"
          className={classes.input}
          onChange={handleChange("lastName")}
          defaultValue={values.lastName}
        />

        <TextField
          required
          id="email"
          label="Email Address"
          name="email"
          className={classes.input}
          onChange={handleChange("email")}
          defaultValue={values.email}
        />

        <TextField
          required
          name="password"
          label="Password"
          type="password"
          id="password"
          className={classes.input}
          onChange={handleChange("password")}
          defaultValue={values.password}
        />
        <Button onClick={forward} className={classes.button}>
          Next
        </Button>
      </form>
      <Link href="/signin" variant="body2">
        Already have an account? Sign in
      </Link>
    </div>
  );
}
