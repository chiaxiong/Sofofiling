import React from "react";
import { Paper, Grid, Avatar, TextField } from "@material-ui/core";

export default function Comment() {
  return (
    <div>
      <Paper>
        <Grid container>
          <Grid item>
            <Avatar />
          </Grid>
          <Grid item>
            <TextField placeholder="Comment" />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
