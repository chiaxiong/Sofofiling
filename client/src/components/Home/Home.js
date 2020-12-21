import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "@reach/router";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100vh",
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
  },
  button: {
    color: "#fff",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar style={{ backgroundColor: "#f5ab7c" }}>
        <Toolbar>
          <IconButton>
            <Typography variant="h6" className={classes.title}>
              Sofofiling
            </Typography>
          </IconButton>
          <Grid container display="flex" direction="row-reverse">
            <Link to="signin" className={classes.link}>
              <Button color="inherit" className={classes.button}>
                Sign In
              </Button>
            </Link>
            <Link to="signup" className={classes.link}>
              <Button className={classes.button}>Sign Up</Button>
            </Link>
          </Grid>
        </Toolbar>
      </AppBar>
      <Link to="feed">
        <Button>Feed</Button>
      </Link>
    </div>
  );
}
