import React from "react";
import SideBar from "../SideBar/SideBar";
import Reminder from "../SideBar/Reminder";
import Grid from "@material-ui/core/Grid";
import Post from "../Post/Post";
import PostForm from "../Post/PostForm";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  reminder: {
    position: "relative",
    left: "20px",
    bottom: "10px",
  },
  divider: {
    marginLeft: "55px",
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid>
          <SideBar />
        </Grid>
        <Grid>
          <Grid item>
            <PostForm />
          </Grid>
          <Divider className={classes.divider} />
          <Grid item>
            <Post />
          </Grid>
        </Grid>
        <Grid className={classes.reminder}>
          <Reminder />
        </Grid>
      </Grid>
    </div>
  );
}
