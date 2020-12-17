import React, { useState, useEffect } from "react";
import SideBar from "../SideBar/SideBar";
import Reminder from "../SideBar/Reminder";
import Grid from "@material-ui/core/Grid";
import Post from "../Post/Post";
import PostForm from "../Post/PostForm";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";
import { navigate } from "@reach/router";
import axios from "axios";
import useUser from "../../userContext/useUser";

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

export default function Feed() {
  const classes = useStyles();

  const [singlePost, setSinglePost] = useState({});

  const { token, user } = useUser();

  if (!user) navigate("/signin");

  const addPost = async content => {
    await axios
      .post(
        "http://localhost:5000/api/post",
        {
          content: content.content,
          title: content.title,
          limit: parseInt(content.limit),
          location: content.location,
        },
        { headers: { "x-auth-token": token } }
      )
      .then(response => {
        console.log(response.data);
        console.log("post added");
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  const getPost = () => {
    axios
      .get("http://localhost:5000/api/post", {
        headers: { "x-auth-token": token },
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  useEffect(async () => {
    await axios
      .get("http://localhost:5000/api/post")
      .then(({ data }) => setSinglePost(data))
      .catch(err => {
        console.log(err);
      });
  });

  const getUser = () => {
    axios
      .get("http://localhost:5000/api/user", {
        headers: { "x-auth-token": token },
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  return (
    <div>
      <Grid container>
        <Grid>
          <SideBar />
        </Grid>
        <Grid>
          <Grid item>
            <PostForm onPostSubmit={addPost} />
          </Grid>
          <Divider className={classes.divider} />
          <Grid item>
            <Post onGetPost={getPost} onGetUser={getUser} />
          </Grid>
        </Grid>
        <Grid className={classes.reminder}>
          <Reminder />
        </Grid>
      </Grid>
    </div>
  );
}
