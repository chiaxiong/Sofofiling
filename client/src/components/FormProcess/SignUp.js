import React from "react";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  form: {
    margin: theme.spacing(4),
  },
  input: {
    marginTop: "36px",
  },
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <div>
      <form className={classes.form} noValidate>
        <TextField
          name="firstName"
          required
          fullWidth
          id="firstName"
          label="First Name"
          autoFocus
          className={classes.input}
        />

        <TextField
          required
          fullWidth
          id="lastName"
          label="Last Name"
          name="lastName"
          className={classes.input}
        />

        <TextField
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          className={classes.input}
        />

        <TextField
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          className={classes.input}
        />
      </form>
      <Link href="#" variant="body2">
        Already have an account? Sign in
      </Link>
    </div>
  );
}
