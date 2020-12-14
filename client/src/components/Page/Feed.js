import React from "react";
import SideBar from "../SideBar/SideBar";
import Reminder from "../SideBar/Reminder";
import Grid from "@material-ui/core/Grid";
import Post from "../Post/Post";

export default function RecipeReviewCard() {
  return (
    <div>
      <Grid container>
        <Grid item>
          <SideBar />
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
