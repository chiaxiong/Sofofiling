import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  form: {
    margin: theme.spacing(4),
  },
  input: {
    marginTop: "40px",
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
