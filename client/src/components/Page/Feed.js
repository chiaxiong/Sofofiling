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
    display: "flex",
    flexDirection: "row-reverse",
    width: "100%",
  },
}));

export default function Feed() {
  const classes = useStyles();

  const [posts, setPosts] = useState([]);
  const [userName, setUserName] = useState("");
  const [refreshPost, setRefreshPost] = useState(true);

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
      .catch(err => {
        console.log(err.res);
      });
  }, [refreshPost]);

  //get users
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/user", {
        headers: { "x-auth-token": token },
      })
      .then(res => {
        setUserName(res.data);
        // console.log(res.data);
      })
      .catch(err => {
        console.log(err.res);
      });
  }, [refreshPost]);

  return (
    <div>
      <Grid container>
        <Grid className={classes.menu}>
          <MenuNav />
        </Grid>
        <Grid>
          <SideBar />
        </Grid>
        <Grid>
          <Grid item>
            <PostForm onPostSubmit={addPost} />
          </Grid>
          <Divider className={classes.divider} />
          <Grid item>
            {posts.map(post => (
              <Post key={post._id} {...post} {...userName} />
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
