import React, { useRef } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import useUser from "../../userContext/useUser";
import { navigate } from "@reach/router";
import axios from "axios";
import { Link } from "@reach/router";

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
    top: "205px",
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
  logo: {
    fontWeight: "bold",
    fontSize: "2.5em",
    backgroundColor: "#fff",
    border: "10px solid #F5AB7C",
    borderRadius: "50px",
    display: "inline",
    padding: "20px",
    position: "relative",
    top: "150px",
    color: "#F5AB7C",
  },
  link: {
    textDecoration: "none",
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const { setToken } = useUser();

  const emailRef = useRef();
  const passwordRef = useRef();

  const signin = async e => {
    e.preventDefault();

    const body = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/signin",
        body
      );
      console.log(data);

      if (data) {
        setToken(data.token);
        navigate("feed");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={classes.wrapper}>
      <Link to="/" className={classes.link}>
        <div className={classes.logo}>Sofofiling</div>
      </Link>
      <form className={classes.form} noValidate onSubmit={signin}>
        <TextField
          inputRef={emailRef}
          required
          id="email"
          label="Email Address"
          name="email"
          className={classes.input}
        />

        <TextField
          inputRef={passwordRef}
          required
          name="password"
          label="Password"
          type="password"
          id="password"
          className={classes.input}
        />
        <Button className={classes.button} type="submit">
          Sign In
        </Button>
      </form>
    </div>
  );
}
