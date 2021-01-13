import React from "react";
import Sidebar from "./Sidebar";
import ProfileFeed from "./ProfileFeed";
import { Grid } from "@material-ui/core";
import useData from "../../useData/useData";

export default function Profile() {
  const { posts } = useData("http://localhost:5000/api/post");
  console.log(posts);

  return (
    <div>
      <Grid container>
        <Grid item>
          <Sidebar />
        </Grid>
        <Grid item>
          <ProfileFeed post={posts} />
        </Grid>
      </Grid>
    </div>
  );
}
