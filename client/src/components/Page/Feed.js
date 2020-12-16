import React from "react";
import SideBar from "../SideBar/SideBar";
import Reminder from "../SideBar/Reminder";
import Grid from "@material-ui/core/Grid";
import Post from "../Post/Post";
import PostForm from "../Post/PostForm";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  wrapper: {
    width: "100%",
    display: "flex",
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  return (
    <div>
      <Grid container justify="flex-end" alignItems="center" direction="column">
        <Grid item>
          <SideBar />
        </Grid>
        <Grid item>
          <PostForm />
        </Grid>
        <Grid item>
          <Post />
        </Grid>
        <Grid>
          <Reminder />
        </Grid>
      </Grid>
    </div>
  );
}
