import React, { useState, useEffect } from "react";
import SideBar from "../SideBar/SideBar";
import { Grid, Divider, Button } from "@material-ui/core/";
import Post from "./Post";
import PostForm from "./PostForm";
import { makeStyles } from "@material-ui/core/styles";
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
  const [fitler, setFilter] = useState(null);
  const [refreshPost, setRefreshPost] = useState(true);
  const [users, setUsers] = useState([]);
  const { token, user } = useUser();

  if (!user) navigate("/signin");

  //add new post
  const addPost = async form => {
    await axios
      .post(
        "http://localhost:5000/api/post",
        {
          content: form.content,
          title: form.title,
          limit: parseInt(form.limit),
          location: form.location,
          category: form.category,
          service: form.service,
          time: form.time,
          date: form.date,
        },
        { headers: { "x-auth-token": token } }
      )
      .then(() => {
        setRefreshPost(!refreshPost);
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
      })
      .catch(error => {
        console.log(error);
      });
  }, [refreshPost]);

  //get categories
  const getCategory = categoryId => {
    axios
      .get(`http://localhost:5000/api/post/category/${categoryId}`, {
        headers: { "x-auth-token": token },
      })
      .then(res => {
        setPosts(res.data);
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  //get users
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/user", {
        headers: { "x-auth-token": token },
      })
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [refreshPost]);

  //TODO
  const filterPost = () => {
    axios
      .get("http://localhost:5000/api/post", {
        headers: { "x-auth-token": token },
      })
      .then(({ data }) => {
        setPosts(data);
        setFilter(data.filter());
        console.log("click");
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
              <PostForm onPostSubmit={addPost} {...posts} />
            </Grid>
            <Grid>
              <Button value="Clear">Clear</Button>
              <Button value="New" onClick={filterPost}>
                New
              </Button>
              <Button value="Limit">Limit</Button>
            </Grid>
            <Divider className={classes.divider} />
            <Grid item>
              {posts.map(post => (
                <Post key={post._id} {...post} {...users} />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  );
}
