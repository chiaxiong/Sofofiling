import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  message: {
    padding: theme.spacing(8, 5, 4, 5),
  },
}));

export default function Welcome() {
  const classes = useStyles();
  return (
    <Container>
      <Typography variant="h5" className={classes.message}>
        Welcome to the Sofofiling family!
        <br />
        <br />
        Our name comes from the word sophophiles, a person who loves to gather
        knowledge! Start today to learn, or share what you know to others!
      </Typography>
    </Container>
  );
}
