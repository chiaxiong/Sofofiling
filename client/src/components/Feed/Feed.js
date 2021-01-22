import React, { useState, useEffect } from "react";
import SideBar from "../SideBar/SideBar";
import { Grid, Divider, Button } from "@material-ui/core/";
import Post from "./Post";
import PostForm from "./PostForm";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import useUser from "../../userContext/useUser";
import MenuNav from "../MenuItem/MenuNav";
import { navigate } from "@reach/router";

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
  const [userSubs, setUserSubs] = useState([]);
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
  useEffect(async () => {
    let result = await axios.get("http://localhost:5000/api/user", {
      headers: { "x-auth-token": token },
    });

    let userData = result.data;
    console.log("userData: ", userData);
    console.log("login user: ", user);

    let filterUser = userData.find(currentUser => {
      console.log("current user: ", currentUser);
      if (currentUser._id === user._id) {
        console.log("matched user");
        return true;
      } else if (currentUser._id !== user._id) {
        console.log("user not matched");
        return false;
      }
    });
    console.log("we got the matching user", filterUser);
    setUserSubs(filterUser.subscriptions);
    axios
      .get("http://localhost:5000/api/post", {
        headers: { "x-auth-token": token },
      })
      .then(({ data }) => {
        let subscribedCategory = filterUser.subscriptions;
        console.log("list of subscriptions: ", subscribedCategory);
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
        console.log("category button click", res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  //subscribing to categories
  const subscribe = async category => {
    console.log("from feed.js", category);
    await axios
      .put(
        "http://localhost:5000/api/user/subscribe",
        { subscription: category },
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
            <SideBar
              categoryHandler={getCategory}
              subscribe={subscribe}
              userSubs={userSubs}
            />
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
