import React from "react";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  myButton: {
    color: "#7E7B7B",
    backgroundColor: "#F5AB7C",
    "&:hover": {
      backgroundColor: "#F5AB7C",
    },
    borderRadius: "20px",
    width: "200px",
    height: "80px",
    position: "relative",
    left: "40px",
    display: "flex",
    top: "300px",
    paddingRight: theme.spacing(8),
    marginTop: theme.spacing(2),
  },
  buttonList: {
    marginTop: theme.spacing(2),
  },
}));

const Reminder = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Divider className={classes.divider} />
      <List className={classes.buttonList}>
        {["Art", "Music", "Code", "Game", "Cooking"].map((text, index) => (
          <Button key={text} className={classes.myButton}>
            <ListItemText primary={text} />
          </Button>
        ))}
      </List>
    </Grid>
  );
};

export default Reminder;
