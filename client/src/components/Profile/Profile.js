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
  const [currentUser, setCurrentUser] = useState();
  const [updatePost, setUpdatePost] = useState(null);

  const { token, user } = useUser();
  if (!user) navigate("/signin");

  const headers = { headers: { "x-auth-token": token } };

  useEffect(async () => {
    const userAPI = "http://localhost:5000/api/user";
    const postAPI = "http://localhost:5000/api/post";

    const users = await axios.get(userAPI, headers);
    const post = await axios.get(postAPI, headers);

    axios
      .all([users, post])
      .then(
        axios.spread((...data) => {
          const allUsers = data[0].data;
          const allPosts = data[1].data;

          let userData = allUsers;

          let filterUser = userData.find(currentUser =>
            setCurrentUser(currentUser)
          );

          setCurrentUser(filterUser);

          let userPosts = allPosts.filter(userPost => {
            if (userPost.user._id === user._id) {
              return true;
            } else {
              return false;
            }
          });
          setUserPosts(userPosts);
        })
      )
      .catch(err => {
        console.log(err);
      });
  }, [refreshPost]);

  const deletePost = async postId => {
    await axios
      .delete(`http://localhost:5000/api/post/${postId}`, headers)
      .then(() => setRefreshPost(!refreshPost));
  };

  const editPost = async (postId, form) => {
    console.log(form);
    try {
      const response = await axios.put(
        `http://localhost:5000/api/post/${postId}`,
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
        headers
      );

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Grid container>
        <Grid item>
          <ProfileSideBar />
        </Grid>
        <Grid item>
          {userPosts.map(post => (
            <ProfilePost
              key={post._id}
              {...post}
              deletePost={deletePost}
              userInfo={currentUser}
              updatePost={editPost}
            />
          ))}
        </Grid>
        <Grid item>
          <MenuNav />
        </Grid>
      </Grid>
    </div>
  );
}
