import React from "react";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import axios from "axios";
import useUser from "../../userContext/useUser";
import { navigate } from "@reach/router";

const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  buttonList: {
    display: "flex",
    flexDirection: "column",
  },
  trendingButton: {
    color: "#7E7B7B",
    backgroundColor: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
    },
    borderRadius: "50px",
    width: "200px",
    margin: theme.spacing(2, 0, 0, 2),
  },
  myButton: {
    color: "#7E7B7B",
    backgroundColor: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
    },
    borderRadius: "50px",
    width: "200px",
    margin: theme.spacing(2, 0, 0, 2),
    position: "relative",
    left: "40px",
  },
  sidebar: {
    backgroundColor: "#F5AB7C",
    height: "100%",
  },
  divider: {
    marginTop: "20px",
    marginLeft: "20px",
    marginRight: "-20px",
  },
}));

export default function Category() {
  const { token, user } = useUser();
  const classes = useStyles();

  if (!user) navigate("/signin");

  const getCategory = categoryId => {
    axios
      .get(`http://localhost:5000/api/post/category/${categoryId}`, {
        headers: { "x-auth-token": token },
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <Typography>Sofofiling</Typography>
      <Divider className={classes.divider} />
      <Typography>Trending Categories</Typography>
      <List className={classes.buttonList}>
        {["Art", "Music", "Code", "Game", "Cooking"].map((text, index) => (
          <Button
            key={index}
            className={classes.trendingButton}
            onClick={() => getCategory(text)}>
            <ListItemText primary={text} />
          </Button>
        ))}
      </List>
    </div>
  );
}
