import React from "react";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import useUser from "../../userContext/useUser";
import { Link } from "@reach/router";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  buttonText: {
    color: "#FFF",
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
  },
  menuLink: {
    textDecoration: "none",
    color: "#000",
  },
}));

export default function MenuNav() {
  const { user, setToken } = useUser();

  const logoutHandler = () => {
    setToken(null);
  };

  const classes = useStyles();

  return (
    <div>
      {!user ? (
        <Link to="/signin" className={classes.link}>
          <Button variant="text" className={classes.buttonText}>
            Login
          </Button>
        </Link>
      ) : (
        <>
          <MenuItem onClick={() => logoutHandler()}>Logout</MenuItem>
        </>
      )}
    </div>
  );
}
