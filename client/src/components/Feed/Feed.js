import React, { useState, useEffect } from "react";
import SideBar from "../SideBar/SideBar";
import { Grid, Divider, Button } from "@material-ui/core/";
import Post from "./Post";
import PostForm from "./PostForm";
import { makeStyles } from "@material-ui/core/styles";
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
  useEffect(async () => {
    let result = await axios.get("http://localhost:5000/api/user", {
      headers: { "x-auth-token": token },
    });

    let userData = result.data;
    console.log("user data: ", userData);
    console.log("Logged In User: ", user);

    let filterUser = userData.find(currentUser => {
      console.log("single users", currentUser);
      if ((currentUser._id = user._id)) {
        return true;
      } else {
        return false;
      }
    });
    console.log("We got the matched user!", filterUser);

    axios
      .get("http://localhost:5000/api/post", {
        headers: { "x-auth-token": token },
      })
      .then(({ data }) => {
        let subscribedCategory = filterUser.subscriptions;
        console.log("We got the subscriptions: ", subscribedCategory);
        let filterPosts = data.filter(post => {
          if (subscribedCategory.includes(post.category)) {
            return true;
          } else {
            return false;
          }
        });
        setPosts(filterPosts);
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

  //subscribing to categories
  const subscribe = async subscriptions => {
    await axios
      .put(
        "http://localhost:5000/api/user/subscribe",
        { subscriptions: subscriptions },
        {
          headers: { "x-auth-token": token },
        }
      )
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  //deleteing subscriptions
  // const deleteSubscriptions = async () => {};

  //TODO filter post
  // const filter = posts.filter();

  return (
    user && (
      <div>
        <Grid container display="flex">
          <Grid item className={classes.menu}>
            <MenuNav />
          </Grid>
          <Grid item>
            <SideBar categoryHandler={getCategory} subscribe={subscribe} />
          </Grid>
          <Grid>
            <Grid item>
              <PostForm onPostSubmit={addPost} {...posts} />
            </Grid>
            <Grid>
              <Button value="Clear">Clear</Button>
              <Button value="New">New</Button>
              <Button value="Limit">Limit</Button>
            </Grid>
            <Divider className={classes.divider} />
            <Grid item>
              {posts.map(post => (
                <Post key={post._id} {...post} />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  );
}
