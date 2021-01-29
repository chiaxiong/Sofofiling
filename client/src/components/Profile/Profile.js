import axios from "axios";
import React, { useState, useEffect } from "react";
import ProfileSideBar from "./ProfileSideBar";
import ProfilePost from "./ProfilePost";
import useUser from "../../userContext/useUser";
import { Grid } from "@material-ui/core";
import MenuNav from "../MenuItem/MenuNav";
import { navigate } from "@reach/router";

export default function Profile() {
  const [userPosts, setUserPosts] = useState([]);
  const [refreshPost, setRefreshPost] = useState(true);

  const { token, user } = useUser();
  if (!user) navigate("/signin");

  const headers = { headers: { "x-auth-token": token } };
  const postAPI = "http://localhost:5000/api/post";

  useEffect(() => {
    axios
      .get(postAPI, headers)
      .then(({ data }) => {
        let userPosts = data.filter(userPost => {
          if (userPost.user._id === user._id) {
            return true;
          } else {
            return false;
          }
        });
        setUserPosts(userPosts);
      })
      .catch(err => {
        console.log(err);
      });
  }, [refreshPost]);

  const deletePost = async postId => {
    await axios
      .delete(`http://localhost:5000/api/post/${postId}`, headers)
      .then(() => setRefreshPost(!refreshPost));
  };

  return (
    user && (
      <div>
        <Grid container>
          <Grid item>
            <ProfileSideBar />
          </Grid>
          <Grid item>
            {userPosts.map(post => (
              <ProfilePost key={post._id} {...post} deletePost={deletePost} />
            ))}
          </Grid>
          <Grid item>
            <MenuNav />
          </Grid>
        </Grid>
      </div>
    )
  );
}
