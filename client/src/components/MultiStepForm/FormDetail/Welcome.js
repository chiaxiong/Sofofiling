import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

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
  message: {
    padding: theme.spacing(8, 20, 4, 20),
    color: "#827F7F",
    fontSize: "2em",
    fontWeight: "bold",
  },
}));

export default function Welcome() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.form}>
        <Typography variant="h5" className={classes.message}>
          Welcome to the Sofofiling family!
          <br />
          <br />
          Our name comes from the word sophophiles, a person who loves to gather
          knowledge! Start today to learn, or share what you know to others!
        </Typography>
      </div>
    </div>
  );
}
