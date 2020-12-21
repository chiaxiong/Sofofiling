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
import MenuNav from "../MenuItem/MenuNav";

const useStyles = makeStyles(theme => ({
  reminder: {
    position: "relative",
    left: "20px",
    bottom: "10px",
  },
  divider: {
    marginLeft: "55px",
  },
  menu: {
    flexDirection: "row-reverse",
    width: "100%",
    position: "relative",
    left: "1200px",
  },
}));

export default function Feed() {
  const classes = useStyles();

  const [posts, setPosts] = useState([]);
  const [refreshPost, setRefreshPost] = useState(true);

  const { token, user } = useUser();

  if (!user) navigate("/signin");

  //add new post
  const addPost = async content => {
    await axios
      .post(
        "http://localhost:5000/api/post",
        {
          content: content.content,
          title: content.title,
          limit: parseInt(content.limit),
          location: content.location,
          category: content.category,
        },
        { headers: { "x-auth-token": token } }
      )
      .then(res => {
        setRefreshPost(!refreshPost);
        console.log(res);
      })
      .catch(er => console.warn(er));
  };

  //get posts
  useEffect(async () => {
    axios
      .get("http://localhost:5000/api/post", {
        headers: { "x-auth-token": token },
      })
      .then(({ data }) => setPosts(data))
      .catch(error => {
        console.log(error);
      });
  }, [refreshPost]);

  return (
    <div>
      <Grid container display="flex">
        <Grid item className={classes.menu}>
          <MenuNav />
        </Grid>
        <Grid item>
          <SideBar />
        </Grid>
        <Grid>
          <Grid item>
            <PostForm onPostSubmit={addPost} />
          </Grid>
          <Divider className={classes.divider} />
          <Grid item>
            {posts.map(post => (
              <Post key={post._id} {...post} />
            ))}
          </Grid>
        </Grid>
        <Grid className={classes.reminder}>
          <Reminder />
        </Grid>
      </Grid>
    </div>
  );
}
