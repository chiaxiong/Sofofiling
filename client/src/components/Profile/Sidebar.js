import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "@reach/router/";

export default function Sidebar() {
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
      <Grid>
        {/* <MenuItem>My Post</MenuItem>
        <MenuItem>Attending Post</MenuItem> */}
      </Grid>
    </Grid>
  );
}
