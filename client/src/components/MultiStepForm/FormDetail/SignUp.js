import React, { useRef } from "react";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import useUser from "../../../userContext/useUser";
import axios from "axios";
import { navigate } from "@reach/router";

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

export default function SignUp({
  nextStep,
  handleChange,
  values,
  handleResetInfo,
}) {
  const classes = useStyles();

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const forward = e => {
    e.preventDefault();
    nextStep();
  };

  const { setToken } = useUser();

  const signUp = async e => {
    e.preventDefault();
    console.log("click");
    const body = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
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

      nextStep();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.wrapper}>
      <form className={classes.form} noValidate onSubmit={signUp}>
        <TextField
          name="form"
          required
          id="firstName"
          label="First Name"
          className={classes.input}
          onChange={handleChange("firstName")}
          defaultValue={values.firstName}
          inputRef={firstNameRef}
        />

        <TextField
          required
          id="form"
          label="Last Name"
          name="lastName"
          className={classes.input}
          onChange={handleChange("lastName")}
          defaultValue={values.lastName}
          inputRef={lastNameRef}
        />

        <TextField
          required
          id="email"
          label="Email Address"
          name="form"
          className={classes.input}
          onChange={handleChange("email")}
          defaultValue={values.email}
          inputRef={emailRef}
        />

        <TextField
          required
          name="form"
          label="Password"
          type="password"
          id="password"
          className={classes.input}
          onChange={handleChange("password")}
          defaultValue={values.password}
          inputRef={passwordRef}
        />
        <Button className={classes.button} type="submit">
          Submit
        </Button>
      </form>
      <Link href="/signin" variant="body2">
        Already have an account? Sign in
      </Link>
    </div>
  );
}
