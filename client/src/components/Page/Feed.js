import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SideBar from "../SideBar/SideBar";
import Grid from "@material-ui/core/Grid";
import Post from "../Post/Post";

export default function RecipeReviewCard() {
  return (
    <div>
      <Grid container>
        <Grid item>
          <SideBar xs={12} />
        </Grid>
        <Grid item>
          <Post />
        </Grid>
      </Grid>
    </div>
  );
}
