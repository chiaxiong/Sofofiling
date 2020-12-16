import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import useUser from "../../userContext/useUser";
import { TextField } from "@material-ui/core";

import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    dispaly: "flex",
    backgroundColor: "#eee",
    marginLeft: "30px",
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
  avatar: {
    marginTop: "20px",
    width: "50px",
    height: "50px",
  },
  name: {
    marginLeft: "16px",
    fontSize: "1.5em",
    marginTop: "30px",
  },
  formField: {
    width: "100%",
  },
  radioBtn: {
    display: "flex",
    direction: "row",
  },
}));

export default function PostForm({ props }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <form>
        <div>
          <div className={classes.cardHeader}>
            <Avatar className={classes.avatar} />
            <h5 className={classes.name}>Chia Xiong</h5>
          </div>
          <TextField className={classes.formField} multiline rows={5} />
          <div>
            <div className={classes.inputField}>
              <label for="location">LOCATION</label>
              <input type="text" name="location"></input>
              <h4>DATE</h4>
              <p>1/1/11</p>
              <h4>TIME</h4>
              <p>12:00</p>
              <h4>LIMITED</h4>
              <p>No</p>
            </div>
          </div>
        </div>
        <Button>Post</Button>
      </form>
    </div>
  );
}
