import React from "react";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  buttonList: {
    display: "flex",
    flexDirection: "column",
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
}));

export default function SubscribedCate() {
  const classes = useStyles();
  return (
    <div>
      <List className={classes.buttonList}>
        {["Art", "Music", "Code", "Game", "Cooking"].map((text, index) => (
          <Button key={index} className={classes.myButton}>
            <ListItemText primary={text} />
          </Button>
        ))}
      </List>
    </div>
  );
}
