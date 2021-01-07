import React, { useState, useEffect } from "react";
import SideBar from "../SideBar/SideBar";
import Reminder from "../SideBar/Reminder";
import Grid from "@material-ui/core/Grid";
import Post from "./Post";
import PostForm from "./PostForm";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";
import { navigate } from "@reach/router";
import axios from "axios";
import useUser from "../../userContext/useUser";
import MenuNav from "../MenuItem/MenuNav";
import Button from "@material-ui/core/Button";

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
  const [filterPost, setFilterPost] = useState([]);
  const [category, setCategory] = useState([]);

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
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/post", {
        headers: { "x-auth-token": token },
      })
      .then(({ data }) => {
        setPosts(data);
        // for (const n of data) {
        //   console.log(n);
        // }
      })
      .catch(error => {
        console.log(error);
      });
  }, [refreshPost]);

  const handleFitlerClick = e => {
    console.log(e.currentTarget.value);
    console.log(posts);
    if (e.currentTarget.value === "Clear") {
      setFilterPost(posts);
    } else {
      setFilterPost(posts);
    }
  };

  const getCategory = categoryId => {
    axios
      .get(`http://localhost:5000/api/post/category/${categoryId}`, {
        headers: { "x-auth-token": token },
      })
      .then(res => {
        setCategory(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    user && (
      <div>
        <Grid container display="flex">
          <Grid item className={classes.menu}>
            <MenuNav />
          </Grid>
          <Grid item>
            <SideBar categoryHandler={getCategory} />
          </Grid>
          <Grid>
            <Grid item>
              <PostForm onPostSubmit={addPost} />
            </Grid>
            <Grid>
              <Button value="Clear" onClick={handleFitlerClick}>
                Clear
              </Button>
              <Button value="New" onClick={handleFitlerClick}>
                New
              </Button>
              <Button value="Category" onClick={handleFitlerClick}>
                Category
              </Button>
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
    )
  );
}
