import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "@reach/router/";

export default function Sidebar({ post }) {
  const profilePost = () => {
    post();
  };

  return (
    <Grid container>
      <Grid item>
        <Link to="/feed">
          <Typography>Sofofiling</Typography>
        </Link>
      </Grid>
      <Grid item>
        <Avatar />
      </Grid>
      {/* <Grid>
        <MenuItem onClick={profilePost(1)}>My Post</MenuItem>
        <MenuItem onClick={profilePost(0)}>Attending Post</MenuItem>
      </Grid> */}
    </Grid>
  );
}
