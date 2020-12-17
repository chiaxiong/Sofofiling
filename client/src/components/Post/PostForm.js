import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    dispaly: "flex",
    backgroundColor: "#eee",
    marginLeft: "30px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  card: {
    minWidth: "1000px",
  },
  cardHeader: {
    paddingLeft: theme.spacing(5),
    display: "flex",
    marginTop: "20px",
    marginLeft: "20px",
  },
  avatar: {
    marginTop: "20px",
    width: "50px",
    height: "50px",
  },
  name: {
    marginLeft: "16px",
    fontSize: "1.5em",
    marginTop: "30px",
  },
  formField: {
    width: "100%",
  },
  radioBtn: {
    display: "flex",
    direction: "row",
  },
}));

export default function PostForm({ onPostSubmit }) {
  const classes = useStyles();
  const [post, setPost] = useState({
    content: "",
    title: "",
    location: "",
    limit: "",
  });
  const [content, setContent] = useState("");

  const handleChange = e => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  return (
    <div className={classes.root}>
      <form onSubmit={onPostSubmit}>
        <div>
          <div className={classes.cardHeader}>
            <Avatar className={classes.avatar} />
            <h5 className={classes.name}>Chia Xiong</h5>
          </div>
          <TextField
            className={classes.formField}
            multiline
            rows={5}
            name="content"
            value={post.content}
            onChange={handleChange}></TextField>
          <div>
            <div className={classes.inputField}>
              <label htmlFor="title">TITLE</label>
              <input
                type="text"
                name="title"
                value={post.title}
                onChange={handleChange}></input>
              <label htmlFor="location">LOCATION</label>
              <input
                type="text"
                name="location"
                value={post.location}
                onChange={handleChange}></input>
              {/* <label htmlFor="date">DATE</label>
              <input
                type="text"
                name="date"
                value={post.date}
                onChange={handleChange}></input>
              <label htmlFor="time">TIME</label>
              <input
                type="text"
                name="time"
                value={post.time}
                onChange={handleChange}></input> */}
              <label htmlFor="limit">LIMIT</label>
              <input
                type="text"
                name="limit"
                value={post.limit}
                onChange={handleChange}></input>
            </div>
          </div>
        </div>
        <Button onClick={() => onPostSubmit(post)}>Post</Button>
      </form>
    </div>
  );
}
