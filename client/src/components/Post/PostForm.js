import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import useUser from "../../userContext/useUser";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    dispaly: "flex",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  card: {
    minWidth: "1000px",
  },
  cardHeader: {
    paddingLeft: theme.spacing(5),
    display: "flex",
    marginTop: "20px",
    marginLeft: "20px",
  },
  postHeader: {
    margin: theme.spacing(5.25, 0, 0, 2),
  },
  avatar: {
    marginTop: "20px",
    width: "50px",
    height: "50px",
  },
  name: {
    position: "relative",
    right: "131px",
  },
}));

export default function PostForm({ props }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <form>
        <div className={classes.form}>
          <div className={classes.cardHeader}>
            <Avatar className={classes.avatar} />
            <h3 className={classes.postHeader}>category</h3>
            <h3 className={classes.postHeader}>title</h3>
            <h5 className={classes.name}>Chia Xiong</h5>
          </div>
          <TextField />
        </div>
        <div>
          <p>Content goes here</p>
        </div>
      </form>
    </div>
  );
}
