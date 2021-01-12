import React from "react";
import Sidebar from "./Sidebar";
import ProfileFeed from "./ProfileFeed";
import { Grid } from "@material-ui/core";

export default function Profile() {
  return (
    <div>
      <Grid container>
        <Grid item>
          <Sidebar />
        </Grid>
        <Grid item>
          <ProfileFeed />
        </Grid>
      </Grid>
    </div>
  );
}
