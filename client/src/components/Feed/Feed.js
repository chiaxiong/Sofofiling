import React, { useState, useEffect } from "react";
import SideBar from "../SideBar/SideBar";
import { Grid, Divider, Button, CircularProgress } from "@material-ui/core/";
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
  const [activePost, setActivePost] = useState([]);

  if (!user) navigate("/signin");

  //add new post
  const addPost = async form => {
    console.log(form);
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

  // get user's subscripitons & posts
  useEffect(async () => {
    let result = await axios.get("http://localhost:5000/api/user", {
      headers: { "x-auth-token": token },
    });

    let userData = result.data; //set userData = to the data results

    let filterUser = userData.find(currentUser => {
      if (user._id === currentUser._id) {
        //need to set the login user to match the user in the DB
        return true;
      } else {
        return false;
      }
    });

    setUserSubs(filterUser.subscriptions);

    axios
      .get("http://localhost:5000/api/post", {
        headers: { "x-auth-token": token },
      })
      .then(({ data }) => {
        let subscribedCategory = filterUser.subscriptions; //let subscribedCategory contain the user's list of subscriptions

        let filterPosts = data.filter(post => {
          //post is retreving single posts
          if (subscribedCategory.includes(post.category)) {
            //if subscribedCategory includes the category return the value
            return true;
          } else {
            return false;
          }
        });
        setPosts(filterPosts); //setPosts will render all the post that has the subscribed category
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
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  //subscribing to categories
  const subscribe = async category => {
    await axios
      .put(
        "http://localhost:5000/api/user/subscribe",
        { subscriptions: category },
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

  //remove subscribes
  const unsubscribe = async category => {
    await axios
      .delete(`http://localhost:5000/api/user/subscriptions/${category}`, {
        headers: { "x-auth-token": token },
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const filterBtn = async type => {
    await axios
      .get("http://localhost:5000/api/post", {
        headers: { "x-auth-token": token },
      })
      .then(({ data }) => {
        if (type === "Clear") {
          setPosts(data);
        } else if (type === "New") {
          let allPosts = data;
          let recentPost = allPosts.sort().reverse();
          setPosts(recentPost);
        } else if (type === "Limit") {
          console.log("Line 154");
        }
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
            <SideBar
              categoryHandler={getCategory}
              subscribe={subscribe}
              userSubs={userSubs}
              unSub={unsubscribe}
            />
          </Grid>
          <Grid>
            <Grid item>
              <PostForm onPostSubmit={addPost} {...posts} />
            </Grid>
            <Grid>
              <Button onClick={() => filterBtn("Clear")}>Clear</Button>
              <Button onClick={() => filterBtn("New")}>New</Button>
              <Button onClick={() => filterBtn("Limit")}>Limit</Button>
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
