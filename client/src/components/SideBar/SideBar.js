import React from "react";
import Drawer from "./Drawer";
import Reminder from "./Reminder";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  myButton: {
    color: "#7E7B7B",
    display: "flex",
    direction: "column",
  },
}));

export default function SideBar() {
  const classes = useStyles();

  return (
    <div>
      <Drawer />
      <Reminder className={classes.leftSideBar} />
    </div>
  );
}
