import React from "react";
import { Paper, Grid, Avatar, TextField } from "@material-ui/core";

export default function Comment() {
  return (
    <div style={{ marginLeft: "90px" }}>
      <Grid container>
        <Grid item>
          <Avatar />
        </Grid>
        <Grid item style={{ marginLeft: "20px" }}>
          <TextField placeholder="Comment" />
        </Grid>
      </Grid>
    </div>
  );
}
