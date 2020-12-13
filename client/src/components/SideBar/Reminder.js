import React from "react";
import PropTypes from "prop-types";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  myButton: {
    color: "#7E7B7B",
    display: "flex",
    direction: "column",
  },
}));

const Reminder = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Divider className={classes.divider} />
      <List className={classes.buttonList}>
        {["Art", "Music", "Code", "Game", "Cooking"].map((text, index) => (
          <Button button key={text} className={classes.myButton}>
            <ListItemText primary={text} />
          </Button>
        ))}
      </List>
    </Grid>
  );
};

export default Reminder;
