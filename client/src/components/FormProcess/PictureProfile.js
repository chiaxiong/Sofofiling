import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";

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

export default function PictureProfile() {
  const classes = useStyles();
  return (
    <Container>
      <Typography variant="h5" className={classes.message}>
        Time for an upload! We recommend a nice headshot so everyone can see who
        you are!
      </Typography>
      <AccountCircleIcon className={classes.avatar} />
      <p className={classes.skip}>Or click Next to skip</p>
    </Container>
  );
}
