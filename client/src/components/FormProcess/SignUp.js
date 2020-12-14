import React, { useRef } from "react";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
// import axios from "axios";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  form: {
    margin: theme.spacing(4),
  },
  input: {
    marginTop: "36px",
  },
}));

export default function SignUp({ nextStep, handleChange, values }) {
  const classes = useStyles();
  // // const { setToken } = useUser();

  // const firstNameRef = useRef();
  // const lastNameRef = useRef();
  // const emailRef = useRef();
  // const passwordRef = useRef();

  // const signUp = async e => {
  //   e.preventDefault();
  //   const body = {
  //     firstName: firstNameRef.current.value,
  //     lastName: lastNameRef.current.value,
  //     email: emailRef.current.value,
  //     password: passwordRef.current.value,
  //   };

  const forward = e => {
    e.preventDefault();
    nextStep();
  };

  // const { data } = await axios.post("/api/auth/signup", body);

  // if (data) {
  //   setToken(data.token);
  //   navigate("/");
  // }
  // };

  return (
    <div>
      <form className={classes.form} noValidate>
        <TextField
          name="firstName"
          required
          fullWidth
          id="firstName"
          label="First Name"
          className={classes.input}
          onChange={handleChange("firstName")}
          defaultValue={values.firstName}
        />

        <TextField
          required
          fullWidth
          id="lastName"
          label="Last Name"
          name="lastName"
          className={classes.input}
          onChange={handleChange("lastName")}
          defaultValue={values.lastName}
        />

        <TextField
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          className={classes.input}
          onChange={handleChange("email")}
          defaultValue={values.email}
        />

        <TextField
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          className={classes.input}
          onChange={handleChange("password")}
          defaultValue={values.password}
        />
      </form>
      <Button onClick={forward}>Next</Button>
      <Link href="/signin" variant="body2">
        Already have an account? Sign in
      </Link>
    </div>
  );
}
